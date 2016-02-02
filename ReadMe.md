la petite config : server {
            listen 80 default_server;
                    server_name test.pakitow.eu;

                            index index.html;
                                    auth_request /auth;
                                            error_page 401 = @login;

                                                    location / {
                                                                        root /srv/html/;
                                                                                }

                                                                                        location /auth {
                                                                                                            rewrite /auth /$1 break;
                                                                                                                            proxy_pass http://127.0.0.1:1337;
                                                                                                                                            proxy_redirect off;
                                                                                                                                                            proxy_set_header Host $host;
                                                                                                                                                                    }

                                                                                                                                                                            location @login {
                                                                                                                                                                                                rewrite ^.* http://auth.pakilow.eu;
                                                                                                                                                                                                        }
}
