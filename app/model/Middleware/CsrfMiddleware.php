<?php

namespace app\model\Middleware;

use Slim\Middleware;
use app\helpers\Configuration;
use app\helpers\Sessions;
use app\helpers\Hash;
use app\model\User\User;


class CsrfMiddleware extends Middleware
{
    protected $key;

    public function call()
    {
        $this->key = "csrf-token";
        $this->app->hook('slim.before', array($this, 'check'));
        $this->next->call();
    }

    public function check() {
        if(!Sessions::get($this->key)) {
            Sessions::set($this->key, Hash::hash(
                Hash::getMSG()->generateString(128)
            ));
        }
        $token = Sessions::get($this->key);

        if(in_array($this->app->request()->getMethod(), array('POST', 'PUT', 'DELETE'))) {
            if($this->app->request->isAjax()) {
                $body = $this->app->request->getBody();
                $json_data_received = json_decode($body, true);
                if (isset($json_data_received[$this->key])) {
                    $submittedToken = $json_data_received[$this->key] ?: '';
                } else {
                    $submittedToken = '...';
                }

            } else {
                $submittedToken = $this->app->request()->post($this->key) ?: '';
            }
            if(!Hash::hashCheck($token, $submittedToken)) {
                if($this->app->request->isAjax()) {
                    header('Content-Type: application/json');
                    echo json_encode(array(
                        "error" =>"AJAX poziv - pogreška: Nepodudaranje ili nepostojanje CSRF tokena. \n" .
                            "Vjerojatno je stavljena nova verzija aplikacije koja je prebrisala stare postavke.".
                            "Pokušaj refreshati stranicu (i to na način da lupiš enter u address-baru u pregledniku, ".
                            "a ne samo F5 ili refresh)\nJavi ako se problem nastavi. Hvala."
                    ));
                    exit();
                } else {
                    $this->app->flashNow('errors', "Nepodudaranje ili nepostojanje CSRF tokena.\nVjerojatno je stavljena nova verzija aplikacije koja je prebrisala stare postavke.\n".
                        "Pokušaj refreshati stranicu (i to na način da lupiš enter u address-baru u pregledniku, a ne samo F5 ili refresh)\nJavi ako se problem nastavi. Hvala.");
                    $this->app->render('index.twig', array(
                        'user' => $this->app->auth_user
                    ));
                }

            }
        }

        $this->app->view()->appendData( array(
            'csrf_key' => $this->key,
            'csrf_token' => $token
        ));
    }


}