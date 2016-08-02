var run = require('child_process').spawn;
var exec = require('child_process').exec;
var colors = require('colors');
var should = require('should');
var sinon = require('sinon');


var strings = {};
strings = {
    login: {
        login_warning: 'Use "matrix login"',
        already_logged_in_warning: 'already logged in',
        log_out_successfully: 'log out successfully'
    },
    use: {
        device_use_warning: 'matrix use <deviceid>',
        invalid_device: 'invalid device',
        doesnt_permission: 'invalid device,doesn\'t have permission',
        conect_device_successfully: 'Now using device id',
    },
    sim: {
        sim_usage_command: 'matrix sim upgrade',
        sim_init_request_credencials: 'Please enter information for this virtual device',
        sim_not_init_warning: 'Matrix sim init first please',
        sim_clear: 'Simulation Cleared',
        sim_restore_successfully: 'Downloading latest MatrixOS image',
        sim_start_sucessfully: 'start MatrixOS virtual',
        sim_stop_sucessfully: 'stop MatrixOS virtual',
        sim_save_sucessfully: 'save MatrixOS state',
        sim_clear_sucessfully: 'Simulation Cleared',
        sim_unknown_parameter_warning: 'unknown parameter'
    },
    list: {
        list_usage_command: 'display available devices',
        list_devices: 'Device ID',
        list_apps: 'Name',
        list_all: 'Device'
    },
    deviceRequired: {
        no_device_select_warning: 'No Device Indicated',
    },
    set: {
        set_no_parameter_specified: 'matrix set',
        set_env_no_parameter_specified: 'Valid Environments',
        set_env_production: 'Env: production',
        set_env_sandbox: 'Env: sandbox',
        set_config_no_parameter_specified: 'App Name Required:',
        set_config_missing_app_name: 'Must supply key and value:',
        set_config_sucessfully: 'AdBeacon1](vehicle) name = brayan',
    },
    reboot: {
        reboot_unable_reach_device: '',
    },
    search: {
        search_no_parameter_specified: 'matrix search',
        search_warning_parameters_invalid: 'Your needle is too small to find in our haystack',
    },
    install: {
        install_warning_command_usage: 'selected [app/sensor]',
        install_parameter_invalid: 'No application',
        install_warning_already_installed: 'app already installed',
        install_app_successfully: 'installing hello1'
    },
    config: {
        config_warning_command_usage: 'matrix config',
        config_warning_app_dont_exist: 'specified app doesn\`t exist ',
        config_warning_set_key_please: 'matrix config (appName) <key>',

    },
    uninstall: {
        uninstall_warning_command_use: 'error: missing required argument `app',
        uninstall_warning_specified_app_dont_exist: 'specified app doesn\'t exist',
        uninstall_warning_device_offline: 'device is offline',
        uninstall_app_successfully: 'App uninstall successfully'
    },
    update: {
        update_warning_command_usage: 'matrix update',
        update_warning_app_doesnt_install: 'This device doesnt  have the app installed',
        update_successfully_latest_version: 'App update successfully to its latest version',
        update_warning_version_doesnt_exist: 'this version doesnt exist',
        update_version_specified: 'version specified update successfully',
        update_version_parameter_unknown: 'parameter doesnt exist'
    },
    start: {
        start_warning_command_usage: 'start commands usage',
        start_app_running: 'start app running on the active MatrixOS',
        start_app_parameter_unknown: 'parameter doesnt exist'
    },
    stop: {
        stop_command_usage: 'matrix stop usa',
        stop_parammeter_doesnt_exit: 'parameter doesnt exist',
        stops_app_running_active_matrixOS: 'stops the apps actives successfully'
    },
    restart: {
        restart_command_usage: 'restart command usage',
        restart_command_doesnt_exists: 'parameter doesnt exist',
        restart_app_running_MatrixOs: 'restart app successfully'
    },
    create: {
        create_command_usage: 'Must specify app name',
        create_app_spcified_doesnt_exist: 'parameter doesnt exist',
        create_app_successfully: 'scaffolding create successfully'
    },
    deploy: {
        deploy_command_usage: 'deploy command usage',
        deploy_command_doesnt_exist: 'parameter doesnt exist',
        deploy_app_successfully: 'deploy app successfully'
    },
    trigger: {
        trigger_command_usage: 'trigger command usage ',
        trigger_parameter_doesnt_exist: 'parameter doesnt exist',
        trigger_test_run_successfully: 'running test trigger'
    },
    log: {
        log_command_usage: 'command usage `matrix log` <device>, <app> ',
        log_device_doesnt_exist: 'device and app doesnt exist',
        log_successfully: 'logs'
    }
}


describe('Matrix CLI commands', function() {
    context('Not logged in {', function() {
        it.skip('should show a log in warning ', function(done) {
            var notloggedProc = run('matrix', ['']);
            var outputs = new Array();
            notloggedProc.stdout.on('data', function(out) {
                outputs.push(out.toString());
            });

            notloggedProc.on('close', function(code) {
                (outputs.length).should.be.above(15);
                done();
            });

        });

        context('login ', function() {

            after(function(done) {
                exec('matrix logout')
                console.log('cierra sesion');
                done();
            })

            it('should request user credentials...', function(done) {
                this.timeout(15000);
                var loginProc = run('matrix', ['login']);
                var outputs = new Array();
                loginProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());
                    if (out.indexOf('username') > -1) {
                        loginProc.stdin.write('demo.admobilize@gmail.com\n')
                            //outputs.push(out.toString());
                        console.log('brayan111', outputs);
                    } else if (out.toString().indexOf('password') > -1) {
                        loginProc.stdin.write('admobdemo2016\n')
                        console.log('brayan222--', outputs);
                    } else if (out.toString().indexOf('Login Successful') > -1) {
                        console.log('brayannn--', outputs);
                        // console.log(out.toString().red);
                        if (readConfig().user.hasOwnProperty('token')) {
                            console.log('brayannn--', outputs.push(out.toString()));
                            console.log(outputs.toString().red);

                        }
                    }

                });

                loginProc.on('close', function(code) {
                    outputs.should.matchAny(/username/);
                    outputs.should.matchAny(/password/);
                    done();
                });

            });

        });

        context('logout Brayan', function() {

            it.skip('should show a logout in warning ', function(done) {
                var logoutProc = run('matrix', ['logout']);
                var outputs = new Array();

                logoutProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());
                });

                logoutProc.on('close', function(code) {
                    outputs.should.matchAny(new RegExp(strings.login.login_warning));
                    console.log('Close', outputs.toString());
                    done();
                });
            });
        }); // finish Logout


        context('use ', function() {
            it.skip('should show a in warning', function(done) {
                var useProc = run('matrix', ['use']);
                var outputs = new Array();

                useProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());
                });

                useProc.on('close', function(code) {
                    outputs.should.matchAny(new RegExp(strings.login.login_warning));
                    done();
                });
            });
        }); // finish use


        context('sim', function() {
            it.skip('should show a log in warning', function(done) {
                var simProc = run('matrix', ['sim']);
                var outputs = new Array();

                simProc.stdout.on('data', function(out) {
                    console.log('>>>>', out.toString());
                    outputs.push(out.toString());
                });

                simProc.on('close', function(code) {
                    outputs.should.matchAny(new RegExp(strings.login.login_warning))
                    console.log('close', outputs)
                    done();
                });
            });
        }); // finish sim




        context('list', function() {
            it.skip('should show a log in warning', function(done) {
                var outputs = new Array();
                var listProc = run('matrix', ['list']);
                listProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());
                });
                listProc.on('close', function(code) {
                    outputs.should.matchAny(new RegExp(strings.login.login_warning))
                    done();
                });
            });
        }); // finish list



        context('set', function() {

            it.skip('should show a log in warning', function(done) {
                var outputs = new Array();
                var setProc = run('matrix', ['set']);

                setProc.stdout.on('data', function(out) {
                    console.log('>>>>>', out.toString());
                    outputs.push(out.toString());
                });

                setProc.on('close', function(code) {
                    console.log('close', outputs);
                    outputs.should.matchAny(new RegExp(strings.login.login_warning))

                    done();
                });

            });
        }); // finish set

        context('reboot', function() {
            it.skip('should show a log in warning', function(done) {
                var rebootProc = run('matrix', ['reboot']);
                var outputs = new Array();
                rebootProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());
                });

                rebootProc.on('close', function(code) {
                    outputs.should.matchAny(new RegExp(strings.login.login_warning))
                    done();
                });

            });
        }); // finish reboot

        context('search', function() {
            it.skip('should show a log in warning', function(done) {
                var searchProc = run('matrix', ['search']);
                var outputs = new Array();
                searchProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());
                });

                searchProc.on('close', function(code) {
                    outputs.should.matchAny(new RegExp(strings.login.login_warning))
                    done();
                });
            });
        }); //finish search



        context('install', function() {
            it.skip('should show a log in warning', function(done) {
                var installProc = run('matrix', ['install']);
                var errors = new Array();

                installProc.stderr.on('data', function(out) {
                    errors.push(out.toString());
                });

                installProc.on('close', function(code) {
                    errors.should.matchAny(new RegExp(strings.login.login_warning));
                    done();
                });

            });
        }); //finis install 

        context('config', function() {
            it.skip('should show a log in warning', function(done) {
                var configProc = run('matrix', ['config']);
                var errors = new Array();

                configProc.stderr.on('data', function(out) {
                    errors.push(out.toString());
                });

                configProc.on('close', function(code) {
                    errors.should.matchAny(new RegExp(strings.login.login_warning))
                    done();
                });
            });
        }); //finish config 


        context('uninstall', function() {
            it.skip('should show a log in warning', function(done) {
                var uninstallProc = run('matrix', ['uninstall']);
                var errors = new Array();
                uninstallProc.stderr.on('data', function(out) {
                    errors.push(out.toString());
                });

                uninstallProc.on('close', function(code) {
                    errors.should.matchAny(new RegExp(strings.login.login_warning))
                    done();
                });

            });
        }); //finish uninstall 


        context('update', function() {
            it.skip('should show a log in warning', function(done) {
                var updateProc = run('matrix', ['update']);
                var outputs = new Array();
                updateProc.stdout.on('data', function(out) {
                    console.log('>>>>', out.toString());
                    outputs.push(out.toString());
                });

                updateProc.on('close', function(code) {
                    outputs.should.matchAny(new RegExp(strings.login.login_warning))
                    console.log('close', outputs)
                    done();
                });

            });
        }); //finish update

        context('start', function() {
            it.skip('should show a log in warning', function(done) {
                var startProc = run('matrix', ['start']);
                var outputs = new Array();

                startProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());
                });

                startProc.on('close', function(code) {
                    outputs.should.matchAny(new RegExp(strings.login.login_warning))
                    done();
                });

            });
        }); //finish start

        context('stop', function() {
            it.skip('should show a log in warning', function(done) {
                var stopProc = run('matrix', ['stop']);
                var outputs = new Array();

                stopProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());
                });

                stopProc.on('close', function(code) {
                    outputs.should.matchAny(new RegExp(strings.login.login_warning))
                    done();
                });

            });
        }); //finish stop

        context('restart', function() {
            it.skip('should show a log in warning', function(done) {
                var restartProc = run('matrix', ['restart']);
                var errors = new Array();

                restartProc.stderr.on('data', function(out) {
                    errors.push(out.toString());
                });

                restartProc.on('close', function(code) {
                    errors.should.matchAny(new RegExp(strings.login.login_warning))
                    done();
                });

            });
        }); //finish restart 

        context('create', function() {
            it.skip('should show a log in warning', function(done) {
                var createProc = run('matrix', ['create']);
                var errors = new Array();
                createProc.stderr.on('data', function(out) {
                    errors.push(out.toString());
                });

                createProc.on('close', function(code) {
                    errors.should.matchAny(new RegExp(strings.login.login_warning))
                    done();
                });
            });
        }); //finish create 

        context('deploy', function() {
            it.skip('should show a log in warning', function(done) {
                var deployProc = run('matrix', ['deploy']);
                var errors = new Array();

                deployProc.stderr.on('data', function(out) {
                    errors.push(out.toString());
                });

                deployProc.on('close', function(code) {
                    errors.should.matchAny(new RegExp(strings.login.login_warning))
                    done();
                });
            });
        }); //finish deploy 

        context('trigger', function() {
            it.skip('should show a log in warning', function(done) {
                var triggerProc = run('matrix', ['trigger']);
                var errors = new Array();
                triggerProc.stderr.on('data', function(out) {
                    errors.push(out.toString());
                });

                triggerProc.on('close', function(code) {
                    errors.should.matchAny(new RegExp(strings.login.login_warning))
                    done();
                });

            });
        }); //finish trigger 

        context('log }', function() {
            it.skip('should show a log in warning Log', function(done) {
                var logProc = run('matrix', ['log']);
                var outputs = new Array();
                logProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());
                });

                logProc.on('close', function(code) {
                    outputs.should.matchAny(new RegExp(strings.login.login_warning))
                    done();
                });
            });
        }); //finish log
    });







    context('Logged in {', function() {
        before(function(done) {
            this.timeout(15000);
            var loginProc = run('matrix', ['login']);
            loginProc.stdout.on('data', function(out) {
                if (out.toString().indexOf('username') > -1) {
                    loginProc.stdin.write('demo.admobilize@gmail.com\n')
                } else if (out.toString().indexOf('password') > -1) {
                    loginProc.stdin.write('admobdemo2016\n')
                } else if (out.toString().indexOf('Login Successful') > -1) {
                    // console.log(out.toString().red);
                    if (readConfig().user.hasOwnProperty('token')) {
                        console.log(out.toString().red);
                        // done();
                    }
                }

            });
            loginProc.on('close', function(code) {
                console.log('close')
                done();
            });

        })





        //NO DEVICE REQUIRED

        context('No parameters specified', function() {
            it.skip('should show the matrix command usage', function(done) {
                var logProc = run('matrix', ['']);
                var outputs = new Array();
                logProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());
                });

                logProc.on('close', function(code) {
                    (outputs.length).should.be.above(15); //cambio
                    done();
                });

            });
        }); // finish matrix 

        context('Parameters specified', function() {

            context('login_NDR', function() {
                it.skip('should show an "already logged in" warning', function(done) {

                    var loginProc = run('matrix', ['login']);
                    var outputs = new Array();
                    loginProc.stdout.on('data', function(out) {
                        outputs.push(out.toString());
                        outputs.should.matchAny(new RegExp(strings.login.already_logged_in_warning));
                        done();
                    });
                });
            }); // finish login


            context('logout', function() {
                it.skip('should log out', function(done) {
                    var logoutProc = run('matrix', ['logout']);
                    var outputs = new Array();
                    logoutProc.stdout.on('data', function(out) {
                        outputs.push(out.toString());
                    });

                    logoutProc.on('close', function(code) {
                        outputs.should.matchAny(new RegExp(strings.login.log_out_successfully));
                        done();
                    });
                });
            }); // finish Logout

            context('use', function() {
                context('No parameters specified ', function() {
                    it.skip('Show "use" command usage', function(done) {
                        var useProc = run('matrix', ['use']);
                        var outputs = new Array();
                        useProc.stdout.on('data', function(out) {
                            outputs.push(out.toString());
                        });
                        useProc.on('close', function(code) {
                            outputs.should.matchAny(new RegExp(strings.use.device_use_warning));
                            done();
                        });
                    });

                }); // finish                       

                context('Parameters specified', function() {

                    context('Specified device doesn\'t exist', function() {
                        it.skip('should show an "invalid device" warning', function(done) {
                            var useDProc = run('matrix', ['use', 'xx']);
                            var outputs = new Array();
                            useDProc.stdout.on('data', function(out) {
                                outputs.push(out.toString());
                            });
                            useDProc.on('close', function(code) {
                                outputs.should.matchAny(strings.use.invalid_device);
                                done();
                            });
                        });

                    });
                    context('Current user doesn\'t have permission to use specified device', function() {
                        it.skip('should show an "invalid device" warning', function(done) {
                            var useProc = run('matrix', ['use', 'xxx']);
                            var outputs = new Array();
                            useProc.stdout.on('data', function(out) {
                                outputs.push(out.toString());
                            });
                            useProc.on('close', function(code) {
                                outputs.should.matchAny(strings.use.doesnt_permission);
                                done();
                            });
                        });
                    });
                    context('Specified device exists', function() {
                        it.skip('Show set device as current device', function(done) {
                            var useProc = run('matrix', ['use', 'AdBeacon1']);
                            var outputs = new Array();
                            useProc.stdout.on('data', function(out) {
                                outputs.push(out.toString());
                            });
                            useProc.on('close', function(code) {
                                outputs.should.matchAny(new RegExp(strings.use.conect_device_successfully));
                                done();
                            });

                        });

                    });
                });
            }); // finish use

            context('sim', function() {

                context('No parameters specified ', function() {
                    it.skip('Show "sim" command usage', function(done) {
                        var simProc = run('matrix', ['sim', '']);
                        var outputs = new Array();
                        simProc.stdout.on('data', function(out) {
                            outputs.push(out.toString());
                        });

                        simProc.on('close', function(code) {
                            outputs.should.matchAny(new RegExp(strings.sim.sim_usage_command));
                            done();
                        });
                    });
                });
                context('Parameters specified init ', function() {

                    context('init', function() { //pending  capture of data 
                        it.skip('should request simulator settings', function(done) {
                            var simProc = run('matrix', ['sim', 'init']);
                            var outputs = new Array();
                            simProc.stdout.on('data', function(out) {
                                out.should.matchAny(new RegExp(strings.sim.sim_init_request_credencials));
                                done();
                            });


                        });

                    });

                    context('Simulator hasn\'t been initialized', function() {

                        context('restore', function() { //pending for Error 
                            it.skip('should show an "initialize simulator" warning', function(done) {
                                var simProc = run('matrix', ['sim', 'restore']);
                                var outputs = new Array();
                                simProc.stdout.on('data', function(out) {
                                    outputs.push(out.toString());
                                });
                                simProc.on('close', function(code) {
                                    outputs.should.matchAny(new RegExp(strings.sim.sim_restore_warning));
                                    done();
                                });
                            });
                        });

                        context('start', function() {
                            it.skip('should show an "initialize simulator" warning', function(done) {
                                var simProc = run('matrix', ['sim', 'start']);
                                var outputs = new Array();
                                simProc.stdout.on('data', function(out) {
                                    outputs.push(out.toString());
                                });

                                simProc.on('close', function(code) {
                                    outputs.should.matchAny(new RegExp(strings.sim.sim_not_init_warning));
                                    done();
                                });

                            });
                        });

                        context('upgrade', function() {
                            it.skip('should show an "initialize simulator" warning', function(done) {
                                var simProc = run('matrix', ['sim', 'upgrade']);
                                var outputs = new Array();
                                simProc.stdout.on('data', function(out) {
                                    outputs.push(out.toString());
                                });
                                simProc.on('close', function(code) {
                                    outputs.should.matchAny(new RegExp(strings.sim.sim_not_init_warning));
                                    done();
                                });
                            });
                        });

                        context('save', function() {
                            it.skip('should show an "initialize simulator" warning', function(done) {
                                var simProc = run('matrix', ['sim', 'save']);
                                var outputs = new Array();

                                simProc.stderr.on('data', function(out) {
                                    outputs.push(out.toString());
                                });
                                simProc.on('close', function(code) {
                                    outputs.should.matchAny(new RegExp(strings.sim.sim_not_init_warning))
                                    done();
                                });

                            });
                        });

                        context('clear', function() {
                            it.skip('should show an "initialize simulator" warning', function(done) {
                                var simProc = run('matrix', ['sim', 'init']);
                                var outputs = new Array();

                                simProc.stdout.on('data', function(out) {
                                    outputs.push(out.toString());
                                    outputs.should.matchAny(new RegExp(strings.sim.sim_not_init_warning));
                                    done();
                                });
                            });
                        });
                        context('init', function() { //pending  capture of data 
                            it.skip('should request simulator settings', function(done) {
                                var simProc = run('matrix', ['sim', 'init']);
                                var outputs = new Array();
                                simProc.stdout.on('data', function(out) {
                                    out.should.matchAny(new RegExp(strings.sim.sim_init_request_credencials));
                                    done();
                                });
                            });
                        });

                    });

                    context('Simulator initialized', function() {

                        before(function(done) {
                            this.timeout(15000);
                            var simProc = run('matrix', ['sim', 'init']);
                            var outputs = new Array();
                            simProc.stdout.on('data', function(out) {
                                simProc.stdin.write('Example\n');
                                simProc.stdin.write('Example\n');
                                outputs.push(out.toString());
                                //done();
                            });
                            simProc.stdout.on('close', function(code) {
                                done();
                            });

                        });

                        context('restore', function() {
                            it.skip('should reset the simulator', function(done) {
                                var simProc = run('matrix', ['sim', 'restore']);
                                var outputs = new Array();
                                simProc.stdout.on('data', function(out) {
                                    outputs.push(out.toString());
                                });

                                simProc.on('close', function(code) {
                                    outputs.should.matchAny(new RegExp(strings.sim.sim_restore_successfully));
                                    done();
                                });
                            });
                        });

                        context('start', function() {
                            it.skip('should start MatrixOS virtual environment', function(done) {
                                var startProc = run('matrix', ['sim', 'start']);
                                var outputs = new Array();
                                startProc.stderr.on('data', function(out) {
                                    outputs.push(out.toString());
                                })
                                startProc.stdout.on('close', function(code) {
                                    outputs.should.matchAny(new RegExp(strings.sim.sim_start_sucessfully));
                                })
                            });
                        });
                        context('stop', function() {
                            it.skip('should stop MatrixOS virtual environment', function(done) {
                                var stopProc = run('matrix', ['sim', 'stop']);
                                var outputs = new Array();
                                stopProc.stderr.on('data', function(out) {
                                    outputs.push(out.toString());
                                })
                                stopProc.stdout.on('close', function(code) {
                                    outputs.should.matchAny(new RegExp(strings.sim.sim_stop_sucessfully));
                                    done();
                                })
                            });
                        });

                        context('save', function() {
                            it.skip('should save MatrixOS state, use after deploy / install', function(done) {
                                var saveProc = run('matrix', ['sim', 'save']);
                                var outputs = new Array();
                                saveProc.stderr.on('data', function(out) {
                                    outputs.push(out.toString());
                                    //console.log('brayan1', out.toString(),'<<<<<<<');
                                })
                                saveProc.stdout.on('close', function(code) {
                                    outputs.should.matchAny(new RegExp(strings.sim.sim_save_sucessfully));
                                    console.log('closeeee', outputs);
                                    done();
                                })
                            });
                        });

                        context('clear', function() {
                            it.skip('should remove simulation local data', function(done) {
                                var clearProc = run('matrix', ['sim', 'clear']);
                                var outputs = new Array();
                                clearProc.stdout.on('data', function(out) {
                                    outputs.push(out.toString());
                                })
                                clearProc.stdout.on('close', function(code) {
                                    outputs.should.matchAny(new RegExp(strings.sim.sim_clear_sucessfully));
                                    done();
                                })
                            });
                        });

                    });

                    context('Unknown parameter specified', function() {
                        it.skip('should display an "unknown parameter warning"', function(done) {
                            var unkProc = run('matrix', ['sim', 'XXX']);
                            var outputs = new Array();
                            unkProc.stdout.on('data', function(out) {
                                outputs.push(out.toString());
                            })
                            unkProc.stdout.on('close', function(code) {
                                console.log('brayan', outputs);
                                outputs.should.matchAny(new RegExp(strings.sim.sim_unknown_parameter_warning));
                                done();
                            })
                        });
                    });
                });
            }); //finish sim

            context('list', function() {

                context('No parameters specified', function() {
                    it.skip('Show "list" command usage', function(done) {
                        var listProc = run('matrix', ['list', '']);
                        var outputs = new Array();
                        listProc.stdout.on('data', function(out) {
                            console.log('brayan', out.toString());
                            outputs.push(out.toString());
                        })
                        listProc.stdout.on('close', function(code) {
                            console.log('brayanClose', outputs);
                            outputs.should.matchAny(new RegExp(strings.list.list_usage_command));
                            done();
                        })
                    });
                });

                context('Parameters specified', function() { //pending
                    context('devices', function() {
                        it.skip('display available devices', function(done) {
                            this.timeout(15000);
                            var listProc = run('matrix', ['list', 'devices']);
                            var outputs = new Array();
                            listProc.stdout.on('data', function(out) {
                                console.log('>>>>>    ', out.toString());
                                //console.log('BRAYAN', JSON.stringify(out));

                            });

                            listProc.on('close', function(code) {
                                // outputs.should.matchAny(strings.list.list_devices)
                                console.log('>dsfds>>>', code.toString());
                                done();
                            });
                        });
                    });




                    context('groups', function() {
                        it.skip('display groups of devices', function(done) {});
                    });

                    context('apps', function() {
                        it.skip('display apps on current device', function(done) {});
                    });

                    context('all', function() {
                        it.skip('display all devices with installed apps', function(done) {});
                    });

                    context('Unknown parameter specified', function() {
                        it.skip('should display an "unknown parameter warning"', function(done) {});
                    });
                });
            }); //list

            //DEVICE REQUIRED

            context('set', function() {
                it.skip('should show a "Select a Device" warning', function(done) {
                    var setProc = run('matrix', ['set', '']);
                    var outputs = new Array();
                    setProc.stdout.on('data', function(out) {
                        console.log('>>>>', out.toString());
                        outputs.push(out.toString());
                    });

                    setProc.on('close', function(code) {
                        outputs.should.matchAny(new RegExp(strings.deviceRequired.no_device_select_warning));
                        console.log('close', outputs)
                        done();
                    });
                });
            }); //finish set


            context('reboot', function() {
                it.skip('should show a "Select a Device" warning', function(done) {
                    var rebootProc = run('matrix', ['reboot', '']);
                    var outputs = new Array();
                    rebootProc.stdout.on('data', function(out) {
                        outputs.push(out.toString());
                    })
                    rebootProc.on('close', function(code) {
                        console.log('CLOSE>>>>>>>>>>', outputs);
                        outputs.should.matchAny(new RegExp(strings.deviceRequired.no_device_select_warning));

                        done();
                    })
                });
            }); // finish reboot

            context('search', function() {
                it.skip('should show a "Select a Device" warning', function(done) {
                    var searchProc = run('matrix', ['search']);
                    var outputs = new Array();
                    searchProc.stdout.on('data', function(out) {
                        console.log('>>>>', out.toString());
                        outputs.push(out.toString());
                    });

                    searchProc.on('close', function(code) {
                        outputs.should.matchAny(new RegExp(strings.deviceRequired.no_device_select_warning));
                        console.log('close', outputs)
                        console.log(done);
                        done();
                    });
                });
            }); // finish search

            context('install', function() {
                it.skip('should show a "Select a Device" warning', function(done) {
                    var installProc = run('matrix', ['install']);
                    var outputs = new Array();
                    installProc.stderr.on('data', function(out) {
                        outputs.push(out.toString());
                    });

                    installProc.on('close', function(code) {
                        outputs.should.matchAny(new RegExp(strings.deviceRequired.no_device_select_warning));
                        done();
                    });
                });
            }); // finish install

            context('config', function() {
                it.skip('should show a "Select a Device" warning', function(done) {
                    var configProc = run('matrix', ['config']);
                    var outputs = new Array();
                    configProc.stderr.on('data', function(out) {
                        outputs.push(out.toString());
                    });

                    configProc.on('close', function(code) {
                        outputs.should.matchAny(new RegExp(strings.deviceRequired.no_device_select_warning));
                        done();
                    });
                });
            }); // finish config

            context('uninstall', function() {
                it.skip('should show a "Select a Device" warning', function(done) {
                    var uninstallProc = run('matrix', ['uninstall']);
                    var outputs = new Array();
                    uninstallProc.stderr.on('data', function(out) {
                        outputs.push(out.toString());
                    });

                    uninstallProc.on('close', function(code) {
                        outputs.should.matchAny(new RegExp(strings.deviceRequired.no_device_select_warning));
                        done();
                    });
                });
            }); // finish uninstall

            context('update', function() {
                it.skip('should show a "Select a Device" warning', function(done) {
                    var updateProc = run('matrix', ['update']);
                    var outputs = new Array();
                    updateProc.stdout.on('data', function(out) {
                        outputs.push(out.toString());
                    });

                    updateProc.on('close', function(code) {
                        outputs.should.matchAny(new RegExp(strings.deviceRequired.no_device_select_warning));
                        done();
                    });
                });
            }); // finish update


            context('start', function() {
                it.skip('should show a "Select a Device" warning', function(done) {
                    var startProc = run('matrix', ['start']);
                    var outputs = new Array();
                    startProc.stdout.on('data', function(out) {
                        console.log('Brayan', out.toString());
                        outputs.push(out.toString());
                        console.log(outputs, 'BrayanCLOSE')
                        outputs.should.matchAny(new RegExp(strings.deviceRequired.no_device_select_warning));
                        done();
                    });
                });
            }); // finish start

            context('stop', function() {
                it.skip('should show a "Select a Device" warning', function(done) {
                    var stopProc = run('matrix', ['stop']);
                    var outputs = new Array();
                    stopProc.stdout.on('data', function(out) {
                        console.log('brayan', out.toString());
                        outputs.push(out.toString());
                        console.log('daniloo', outputs);
                        outputs.should.matchAny(new RegExp(strings.deviceRequired.no_device_select_warning));
                        done();
                    })
                });
            }); //finish stop

            context('restart', function() {
                it.skip('should show a "Select a Device" warning', function(done) {
                    var restartProc = run('matrix', ['restart']);
                    var outputs = new Array();

                    restartProc.stderr.on('data', function(out) {
                        console.log('>>>>', out.toString());
                        outputs.push(out.toString());
                    });

                    restartProc.on('close', function(code) {
                        outputs.should.matchAny(new RegExp(strings.deviceRequired.no_device_select_warning));
                        console.log('close', outputs)
                        done();
                    });
                });
            }); // finish restart


            context('create', function() {
                it.skip('should show a "Select a Device" warning', function(done) {
                    var createProc = run('matrix', ['create']);
                    var outputs = new Array();

                    createProc.stderr.on('data', function(out) {
                        console.log('>>>>', out.toString());
                        outputs.push(out.toString());
                    });

                    createProc.on('close', function(code) {
                        outputs.should.matchAny(new RegExp(strings.deviceRequired.no_device_select_warning));
                        console.log('close', outputs)
                        done();
                    });
                });
            }); // finish create

            context('deploy', function() {
                it.skip('should show a "Select a Device" warning', function(done) {
                    var deployProc = run('matrix', ['deploy']);
                    var outputs = new Array();

                    deployProc.stderr.on('data', function(out) {
                        console.log('>>>>', out.toString());
                        outputs.push(out.toString());
                    });

                    deployProc.on('close', function(code) {
                        outputs.should.matchAny(new RegExp(strings.deviceRequired.no_device_select_warning));
                        console.log('close', outputs)
                        done();
                    });
                });
            }); // finish deploy

            context('trigger', function() {
                it.skip('should show a "Select a Device" warning', function(done) {
                    var triggerProc = run('matrix', ['trigger']);
                    var outputs = new Array();

                    triggerProc.stderr.on('data', function(out) {
                        console.log('>>>>', out.toString());
                        outputs.push(out.toString());
                    });

                    triggerProc.on('close', function(code) {
                        outputs.should.matchAny(new RegExp(strings.deviceRequired.no_device_select_warning));
                        console.log('close', outputs)
                        done();
                    });
                });
            }); // finish trigger

            context('log', function() {
                it.skip('should show a "Select a Device" warning', function(done) {
                    var logProc = run('matrix', ['log']);
                    var outputs = new Array();

                    logProc.stdout.on('data', function(out) {
                        console.log('>>>>', out.toString());
                        outputs.push(out.toString());
                        console.log('brayan', outputs);
                        outputs.should.matchAny(new RegExp(strings.deviceRequired.no_device_select_warning));
                        done();
                    });

                });
            }); // finish log

        });

        context('Device selected', function() {
            before(function(done) {
                this.timeout(15000);
                var useProc = run('matrix', ['use', 'AdBeacon1']);
                var outputs = new Array();
                useProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());
                });
                useProc.on('close', function(code) {
                    console.log(outputs);
                    done();
                });
            });
            context('set', function() {
                context('No parameters specified', function() {
                    it.skip('should command "set" usage', function(done) {
                        var setProc = run('matrix', ['set']);
                        var outputs = new Array();
                        setProc.stdout.on('data', function(out) {
                            outputs.push(out.toString());
                        });
                        setProc.on('close', function(code) {
                            outputs.should.matchAny(new RegExp(strings.set.set_no_parameter_specified));
                            done();
                        });
                    });
                }); // finish set No parameters specified


                context('Parameters specified', function() {
                    context('env', function() {
                        context('No parameters specified', function() {
                            it.skip('should show command "set env" usage', function(done) {
                                var setProc = run('matrix', ['set', 'env']);
                                var outputs = new Array();
                                setProc.stderr.on('data', function(out) {
                                    console.log('>>>>', out.toString());
                                    outputs.push(out.toString());
                                });

                                setProc.on('close', function(code) {
                                    outputs.should.matchAny(new RegExp(strings.set.set_env_no_parameter_specified));
                                    console.log('close', outputs)
                                    done();
                                });

                            });
                        });
                        context('Parameters specified', function() {
                            context('sandbox', function() {
                                it.skip('should set the device environment to sandbox', function(done) {
                                    var setProc = run('matrix', ['set', 'env', 'sandbox']);
                                    var outputs = new Array();
                                    setProc.stdout.on('data', function(out) {
                                        outputs.push(out.toString());
                                    });

                                    setProc.on('close', function(code) {
                                        outputs.should.matchAny(new RegExp(strings.set.set_env_sandbox));
                                        done();
                                    });
                                });
                            });
                            context('production', function() {
                                it.skip('should set the device environment to production', function(done) {
                                    var setProc = run('matrix', ['set', 'env', 'production']);
                                    var outputs = new Array();
                                    setProc.stdout.on('data', function(out) {
                                        outputs.push(out.toString());
                                    });

                                    setProc.on('close', function(code) {
                                        outputs.should.matchAny(new RegExp(strings.set.set_env_production));
                                        done();
                                    });
                                });
                            });
                        });
                    });
                    context('config', function() {
                        context('No parameters specified', function() {
                            it.skip('should show command "set config" usage', function(done) {
                                var setProc = run('matrix', ['set', 'config']);
                                var outputs = new Array();
                                setProc.stderr.on('data', function(out) {
                                    console.log('>>>>', out.toString());
                                    outputs.push(out.toString());
                                });

                                setProc.on('close', function(code) {
                                    outputs.should.matchAny(new RegExp(strings.set.set_config_no_parameter_specified));
                                    console.log('close', outputs)
                                    done();
                                });
                            });
                        });
                        context('Parameters specified', function() {
                            context('Missing app name', function() {
                                it.skip('should show command "set config" usage', function(done) {
                                    var setProc = run('matrix', ['set', 'config', 'xxxxx']);
                                    var outputs = new Array();
                                    setProc.stderr.on('data', function(out) {
                                        console.log('>>>>', out.toString());
                                        outputs.push(out.toString());
                                    });

                                    setProc.on('close', function(code) {
                                        outputs.should.matchAny(new RegExp(strings.set.set_config_missing_app_name));
                                        console.log('close', outputs)
                                        done();
                                    });
                                });
                            });
                            context('Invalid app name', function() {
                                it.skip('should show an "invalid app" warning', function(done) {
                                    var setProc = run('matrix', ['set', 'config', 'invalid']);
                                    var outputs = new Array();
                                    setProc.stderr.on('data', function(out) {
                                        outputs.push(out.toString());
                                    });

                                    setProc.on('close', function(code) {
                                        outputs.should.matchAny(new RegExp(strings.set.set_config_missing_app_name));
                                        done();
                                    });
                                });
                            });
                            context('Valid app name', function() {
                                context('Missing proper key value setting', function() {
                                    it.skip('should show command "set config" usage', function(done) {
                                        var setProc = run('matrix', ['set', 'config', 'vehicle']);
                                        var outputs = new Array();
                                        setProc.stderr.on('data', function(out) {
                                            outputs.push(out.toString());
                                        });

                                        setProc.on('close', function(code) {
                                            outputs.should.matchAny(new RegExp(strings.set.set_config_missing_app_name));
                                            done();
                                        });
                                    });
                                });
                                context('Valid key value setting', function() { //pending might be part of the `node-sdk`
                                    it.skip('should set the configuration value for the specified key', function(done) {
                                        var setProc = run('matrix', ['set', 'config', 'vehicle', 'name=brayan']);
                                        var outputs = new Array();
                                        setProc.stderr.on('data', function(out) {
                                            console.log('barayan', out.toString());
                                            outputs.push(out.toString());
                                            console.log('>>>>>', outputs);

                                        });
                                        setProc.on('close', function(done) {
                                            outputs.should.matchAny(new RegExp(strings.set.set_config_sucessfully));
                                            done();
                                        })
                                    });

                                });
                            });
                        });
                    }); //finish set config
                });
            });
        }); //finish  set



        context('reboot', function() {
            context('Unable to reach device', function() {
                it('should return an error', function(done) {
                    var setProc = run('matrix', ['reboot']);
                    var outputs = new Array();
                    setProc.stdout.on('data', function(out) {
                        console.log('>>>>', out.toString());
                        outputs.push(out.toString());
                    });

                    setProc.on('close', function(code) {
                        outputs.should.matchAny(/Use "Matrix Login"/)
                        console.log('close', outputs)
                        done();
                    });
                });
            });
            context('Device is alive', function() {
                it.skip('should reboot the current device', function(done) {});
            });
        }); //finish reboot Pending error tokens 

        context('search', function() {
            context('No parameters specified', function() {
                it.skip('should show command "search" usage', function(done) {
                    var searchProc = run('matrix', ['search']);
                    var outputs = new Array();
                    searchProc.stdout.on('data', function(out) {
                        console.log('>>>>>>>', out.toString());
                        outputs.push(out.toString());
                    })
                    searchProc.on('close', function(code) {
                        console.log('CLOSE', outputs);
                        outputs.should.matchAny(new RegExp(strings.search.search_no_parameter_specified));
                        done();
                    })
                });
            });

            context('Parameters specified', function() {
                context('search term has less than 2 characters', function() {
                    it.skip('should show a search term warning', function(done) {
                        var searchProc = run('matrix', ['search', 'xx']);
                        var outputs = new Array();
                        searchProc.stderr.on('data', function(out) {
                            console.log('>>>>>>>', out.toString());
                            outputs.push(out.toString());
                        })
                        searchProc.on('close', function(code) {
                            console.log('CLOSE', outputs);
                            outputs.should.matchAny(new RegExp(strings.search.search_warning_parameters_invalid));
                            done();
                        })

                    });
                });

                context('search term has more than 2 characters', function() {
                    it.skip('should list the results of an app search', function(done) {
                        var searchProc = run('matrix', ['search', 'xxx']);
                        var outputs = new Array();
                        searchProc.stderr.on('data', function(out) {
                            console.log('>>>>>>>', out.toString());
                            outputs.push(out.toString());
                        })
                        searchProc.on('close', function(code) {
                            console.log('CLOSE', outputs);
                            outputs.should.matchAny(new RegExp(strings.search.search_warning_parameters_invalid));
                            done();
                        })
                    });
                });
            });

        }); //finish search pending (matrix search XXX) by return on a table ! 

        context('install', function() {
            context('No parameters specified', function() {
                it.skip('should show command "install" usage', function(done) {
                    var installProc = run('matrix', ['install']);
                    var outputs = new Array();
                    installProc.stderr.on('data', function(out) {
                        outputs.push(out.toString());
                    });

                    installProc.on('close', function(code) {
                        outputs.should.matchAny(new RegExp(strings.install.install_warning_command_usage));
                        done();
                    });

                });
            });

            context('Parameters specified', function() {
                context('Invalid app/sensor name', function() {
                    it.skip('should show invalid "app/sensor" warning', function(done) {
                        var installProc = run('matrix', ['install', 'XXXX'])
                        var outputs = new Array();
                        installProc.stderr.on('data', function(out) {
                            outputs.push(out.toString());
                        });

                        installProc.on('close', function(code) {
                            outputs.should.matchAny(new RegExp(strings.install.install_parameter_invalid));
                            done();
                        });
                    });
                });

                context('Valid app/sensor name', function() {
                    context('app is already installed', function() {
                        it.skip('should show warning app already installed', function(done) {
                            var installProc = run('matrix', ['install', 'Test Ruben']);
                            var outputs = new Array();
                            installProc.stdout.on('data', function(out) {
                                outputs.push(out.toString());
                                outputs.should.matchAny(new RegExp(strings.install.install_warning_already_installed));
                                done();
                            });
                        });
                    });
                    context('app isn\'t already installed', function() {
                        it.skip('should install the app or sensor specified to active MatrixOS device', function(done) {
                            var installProc = run('matrix', ['install', 'hello1']);
                            var outputs = new Array();
                            installProc.stdout.on('data', function(out) {
                                outputs.push(out.toString());
                                outputs.should.matchAny(new RegExp(strings.install.install_app_successfully));
                                done();
                            });
                        });
                    });
                });
            });
        }); //finish install  

        context('config', function() { //pending by error tokens 
            context('No parameters specified', function() {
                it.skip('should show device configurations', function(done) {
                    var configProc = run('matrix', ['config']);
                    var outputs = new Array();
                    configProc.stdout.on('data', function(out) {
                        console.log('>>>>>', out.toString());
                        outputs.push(out.toString());
                    })
                    configProc.on('close', function(code) {
                        console.log('CLOSEEEE', outputs);
                        outputs.should.matchAny(new RegExp(strings.config.config_warning_command_usage));
                        done();
                    })
                });
            });

            context('Parameters specified', function() {

                context('specified app doesn\'t exist', function() {
                    it.skip('should show an "specified app doesn\'t exist" warning', function(done) {
                        var configProc = run('matrix', ['config', 'XXXXX']);
                        var outputs = new Array();

                        configProc.stderr.on('data', function(out) {
                            console.log('>>>>>', out.toString());
                            outputs.push(out.toString());
                            console.log('>>>>>>>>>>>', outputs);
                            outputs.should.matchAny(new RegExp(strings.config.config_warning_app_dont_exist));
                            done();
                        })

                    });
                });
                context('specified app exists', function() {
                    context('app', function() {
                        it('should show application configurations', function(done) {

                            var configProc = run('matrix', ['config', 'XXXXX']);
                            var outputs = new Array();
                            configProc.stdout.on('data', (out) => {
                                outputs.push(out.toString());
                                console.log(outputs, '<<<<<<<<<'.magenta);
                                outputs.should.matchAny(new RegExp(strings.config.config_warning_set_key_please));
                                done()
                            })
                            configProc.stderr.on('data', (out) => {
                                console.log(`stderrDD: ${out}`.blue);
                                console.log('>>>>>', out.toString().blue);
                                done();

                            });
                            configProc.on('close', (code) => {
                                console.log(`child process exited with code ${code}`.red);
                                console.log('>>>>>', out.toString().magenta);
                                done();
                            });
                        });
                    });

                    context('app key', function() {
                        context('specified key doesn\'t exist', function() {
                            it.skip('should show a "specified key doesn\'t exist" warning', function(done) {});
                        });

                        context('specified key exists', function() {
                            it.skip('should show application configuration key', function(done) {});
                        });
                    });

                    context('app key value', function() {
                        it.skip('should set application configuration key value', function(done) {});
                    });
                });
            });
        }); //finish config   with errors

        context('uninstall', function() {
            context('No parameters specified', function() {
                it.skip('should show command "uninstall" usage', function(done) {
                    var uninstallProc = run('matrix', ['uninstall']);
                    var outputs = new Array();
                    uninstallProc.stdout.on('data', (out) => {
                        console.log(out.toString(), 'stdout'.blue);
                    })
                    uninstallProc.stderr.on('data', (out) => {
                        console.log(out.toString(), 'stderr'.red);
                        outputs.push(out.toString());
                    })
                    uninstallProc.on('close', (code) => {
                        outputs.should.matchAny(new RegExp(strings.uninstall.uninstall_warning_command_use));
                        done();
                    })
                });
            });

            context('Parameters specified', function() {
                context('specified app doesn\'t exist', function() {
                    it.skip('should show a "specified app doesn\'t exist" warning', function(done) {
                        var uninstallProc = run('matrix', ['uninstall', 'XXXX']);
                        var outputs = new Array();
                        uninstallProc.stdout.on('data', (out) => {
                            console.log('stdout');
                        })
                        uninstallProc.stderr.on('data', (out) => {
                            uninstallProc.kill('SIGINT');
                            outputs.push(out.toString());
                        })
                        uninstallProc.on('close', (code) => {
                            outputs.should.matchAny(new RegExp(strings.uninstall.uninstall_warning_specified_app_dont_exist));
                            done();
                        })
                    });
                });

                context('specified app exists', function() {
                    context('device is offline', function() {
                        it.skip('should show a "device is offline" warning', function(done) {
                            var uninstallProc = run('matrix', ['uninstall', 'MyHealthApp']);
                            var outputs = new Array();
                            uninstallProc.stdout.on('data', (out) => {
                                console.log('stdout');
                            })
                            uninstallProc.stderr.on('data', (out) => {
                                uninstallProc.kill('SIGINT');
                                outputs.push(out.toString());
                            })
                            uninstallProc.on('close', (code) => {
                                outputs.should.matchAny(new RegExp(strings.uninstall.uninstall_warning_device_offline));
                                done();
                            });
                        });
                    });

                    context('device is online', function() {
                        it('should uninstall the specified app', function(done) {
                            var uninstallProc = run('matrix', ['uninstall', 'MyHealthApp']);
                            var outputs = new Array();
                            uninstallProc.stdout.on('data', (out) => {
                                console.log('stdout');
                            })
                            uninstallProc.stderr.on('data', (out) => {
                                uninstallProc.kill('SIGINT');
                                outputs.push(out.toString());
                            })
                            uninstallProc.on('close', (code) => {
                                outputs.should.matchAny(new RegExp(strings.uninstall.uninstall_app_successfully));
                                done();
                            });
                        });
                    });
                });
            });
        }); //finish  (error authenticate and acces token )uninstall   

        context('update', function() {

            context('No parameters specified', function() {
                it.skip('should show command "update" usage', function(done) {
                    var updateProc = run('matrix', ['update']);
                    var outputs = new Array();
                    updateProc.stdout.on('data', (out) => {
                        outputs.push(out.toString());
                    })
                    updateProc.stderr.on('data', (out) => {
                        console.log(out, 'stderr');
                    })
                    updateProc.on('close', (code) => {
                        outputs.should.matchAny(new RegExp(strings.update.update_warning_command_usage));
                        done();
                    })
                });
            });

            context('Parameters specified', function() {
                context('app', function() {
                    context('device doesn\'t have the app installed', function() {
                        it.skip('should show a "device doesn\'t have the app installed"', function(done) {
                            var updateProc = run('matrix', ['update', 'vehicle'])
                            var outputs = new Array();

                            updateProc.stdout.on('data', (out) => {
                                console.log('stdout', out.toString());
                            })
                            updateProc.stderr.on('data', (out) => {
                                outputs.push(out.toString());
                            })
                            updateProc.on('close', (code) => {
                                outputs.should.matchAny(new RegExp(strings.update.update_warning_app_doesnt_install));
                                done();
                            })
                        });
                    });

                    context('device has the app installed', function() {
                        it.skip('should update the application to its latest version', function(done) {
                            var updateProc = run('matrix', ['update', 'vehicle'])
                            var outputs = new Array();
                            updateProc.stdout.on('data', (out) => {
                                console.log('stdout', out.toString());
                            })
                            updateProc.stderr.on('data', (out) => {
                                outputs.push(out.toString());
                            })
                            updateProc.on('close', (code) => {
                                outputs.should.matchAny(new RegExp(strings.update.update_successfully_latest_version));
                                done();
                            })
                        });
                    });

                    context('app version', function() {
                        context('version doesn\'t exist', function() {
                            it.skip('should show a version doesn\'t exist warning', function(done) {
                                var updateProc = run('matrix', ['update', 'vehicle', 'versionFake']);
                                var outputs = new Array();
                                updateProc.stdout.on('data', (out) => {
                                    console.log('stdout', out.toString());
                                })
                                updateProc.stderr.on('data', (out) => {
                                    outputs.push(out.toString());
                                })
                                updateProc.on('close', (code) => {
                                    outputs.should.matchAny(new RegExp(strings.update.update_warning_version_doesnt_exist));
                                    done();
                                })
                            });
                        });

                        context('version exists', function() {
                            it.skip('should update to that version', function(done) {
                                var updateProc = run('matrix', ['update', 'veryfirstapp', 'version', '0.7'])
                                var outputs = new Array();

                                updateProc.stdout.on('data', (out) => {
                                    console.log('stdout', out.toString());
                                })
                                updateProc.stderr.on('data', (out) => {
                                    outputs.push(out.toString());
                                })
                                updateProc.on('close', (code) => {
                                    outputs.should.matchAny(new RegExp(strings.update.update_version_specified));
                                    done();
                                })
                            });
                        });
                    });

                    context('unknown parameter', function() {
                        it('should show a "parameter doesn\'t exist "', function(done) {
                            var updateProc = run('matrix', ['update', 'veryfirstapp', 'version', 'XXXXX'])
                            var outputs = new Array();
                            updateProc.stdout.on('data', (out) => {
                                console.log('stdout', out.toString());
                            })
                            updateProc.stderr.on('data', (out) => {
                                outputs.push(out.toString());
                            })
                            updateProc.on('close', (code) => {
                                outputs.should.matchAny(new RegExp(strings.update.update_version_parameter_unknown));
                                done();
                            })
                        });
                    });
                });
            });
        }); // finish update  error "if (version === undefined)"


        context('start', function() {

            context('No parameters specified', function() {
                it.skip('should show command "start" usage', function(done) {
                    var startProc = run('Matrix', ['start', ''])
                    var outputs = new Array();

                    startProc.stdout.on('data', (out) => {
                        console.log('stdout', out.toString());
                    })
                    startProc.stderr.on('data', (out) => {
                        startProc.kill('SIGINT');
                        outputs.push(out.toString());
                    })
                    startProc.on('close', (code) => {
                        outputs.should.matchAny(new RegExp(strings.start.start_warning_command_usage));
                        done();
                    })
                });
            });

            context(' parameters specified', function() {
                context('start', function() {
                    it.skip('Starts an app running on the active MatrixOS', function(done) {
                        var startProc = run('Matrix', ['start', 'vehicle'])
                        var outputs = new Array();

                        startProc.stdout.on('data', (out) => {
                            console.log('stdout', out.toString());
                        })
                        startProc.stderr.on('data', (out) => {
                            startProc.kill('SIGINT');
                            outputs.push(out.toString());
                        })
                        startProc.on('close', (code) => {
                            outputs.should.matchAny(new RegExp(strings.start.start_app_running));
                            done();
                        })
                    });
                });
                context('unknown parameter', function() {
                    it.skip('should show an "parameter doesn\'t exist', function(done) {
                        var startProc = run('Matrix', ['start', 'XXXX'])
                        var outputs = new Array();
                        startProc.stdout.on('data', (out) => {
                            console.log('stdout', out.toString());
                        });
                        startProc.stderr.on('data', (out) => {
                            console.log('stderr', out.toString());
                            startProc.kill('SIGINT');
                            outputs.push(out.toString());
                        })
                        startProc.on('close', (code) => {
                            console.log('close', code);
                            outputs.should.matchAny(new RegExp(strings.start.start_app_parameter_unknown));
                            done();
                        })
                    });
                });

            });
        }); // finish start error " client registration fail"




        context('stop', function() {

            context('No parameters specified', function() {
                it.skip('should show command "stop" usage', function(done) {
                    var stopProc = run('matrix', ['stop', ''])
                    var outputs = new Array();

                    stopProc.stdout.on('data', (out) => {
                        outputs.push(out.toString());
                        stopProc.kill('SIGINT');
                    })
                    stopProc.stderr.on('data', (out) => {
                        stopProc.kill('SIGINT');
                    })
                    stopProc.on('close', (code) => {
                        outputs.should.matchAny(new RegExp(strings.stop.stop_command_usage));
                        done();
                    })
                });
            });

            context(' parameters specified', function() {
                context('unknown parameter', function() {
                    it.skip('should show an "parameter doesn\'t exist', function(done) {
                        var stopProc = run('Matrix', ['stop', 'XXXX'])
                        var outputs = new Array();

                        stopProc.stdout.on('data', (out) => {
                            outputs.push(out.toString());
                            stopProc.kill('SIGINT');
                        })
                        stopProc.stderr.on('data', (out) => {
                            outputs.push(out.toString());
                            stopProc.kill('SIGINT');
                        })
                        stopProc.on('close', (code) => {
                            outputs.should.matchAny(new RegExp(strings.stop.stop_parammeter_doesnt_exit));
                            done();
                        })
                    });
                });
                context('stop', function() {
                    it('Stops an app running on the active MatrixOS', function(done) {
                        var stopProc = run('Matrix', ['stop', 'vehicle'])
                        var outputs = new Array();
                        stopProc.stdout.on('data', (out) => {
                            outputs.push(out.toString());
                            stopProc.kill('SIGINT');

                        })
                        stopProc.stderr.on('data', (out) => {
                            outputs.push(out.toString());
                            stopProc.kill('SIGINT');
                        })
                        stopProc.on('close', (code) => {
                            outputs.should.matchAny(new RegExp(strings.stop.stops_app_running_active_matrixOS));
                            done();
                        })
                    });
                });
            });
        }); //finish stop ERROR FAIL AUTHENTICATE !! 


        context('restart', function() {

            context('No parameters specified', function() {
                it.skip('should show command "restart" usage', function(done) {
                    var restartProc = run('Matrix', ['restart', '']);
                    var outputs = new Array();

                    restartProc.stdout.on('data', (out) => {
                        outputs.push(out.toString());
                        restartProc.kill('SIGINT');
                    })
                    restartProc.stderr.on('data', (out) => {
                        outputs.push(out.toString());
                        restartProc.kill('SIGINT');
                    })
                    restartProc.on('close', (code) => {
                        outputs.should.matchAny(new RegExp(strings.restart.restart_command_usage));
                        done();
                    })
                });
            });

            context(' parameters specified', function() {
                context('unknown parameter', function() {
                    it.skip('should show an "parameter doesn\'t exist', function(done) {
                        var restartProc = run('Matrix', ['restart', 'XXXX']);
                        var outputs = new Array();

                        restartProc.stdout.on('data', (out) => {
                            outputs.push(out.toString());
                            restartProc.kill('SIGINT');
                        })
                        restartProc.stderr.on('data', (out) => {
                            outputs.push(out.toString());
                            restartProc.kill('SIGINT');
                        })
                        restartProc.on('close', (code) => {
                            outputs.should.matchAny(new RegExp(strings.restart.restart_command_doesnt_exists));
                            done();
                        })
                    });
                });

                context('restart', function() {
                    it('Restarts an app running on the MatrixOS', function(done) {
                        var restartProc = run('Matrix', ['restart', 'vehicle']);
                        var outputs = new Array();

                        restartProc.stdout.on('data', (out) => {
                            outputs.push(out.toString());
                            restartProc.kill('SIGINT');
                        })
                        restartProc.stderr.on('data', (out) => {
                            outputs.push(out.toString());
                            restartProc.kill('SIGINT');
                        })
                        restartProc.on('close', (code) => {
                            outputs.should.matchAny(new RegExp(strings.restart.restart_app_running_MatrixOs));
                            done();
                        })
                    });

                });
            });
        }); //finish restart ERROR (Application.restart(admatrix.config, cb);)


        context('create', function() {

            context('No parameters specified', function() {
                it.skip('should show commands "create" usage', function(done) {
                    var createProc = run('matrix', ['create'])
                    var outputs = new Array();

                    createProc.stdout.on('data', (out) => {
                        console.log('stdout>>>>>>>', out.toString());
                    })
                    createProc.stderr.on('data', (out) => {
                        console.log('stderr', out.toString());
                        outputs.push(out.toString());
                    })
                    createProc.on('close', (code) => {
                        console.log('close', outputs);
                        outputs.should.matchAny(new RegExp(strings.create.create_command_usage));
                        done();
                    })
                });
            });

            context('parameter specified', function() {
                context('unknown parameter', function() {
                    it.skip('should show an "parameter doesn\'t exist', function(done) {
                        var createProc = run('matrix', ['create', 'XXXXXX'])
                        var outputs = new Array();

                        createProc.stdout.on('data', (out) => {
                            console.log('stdout>>>>>>>', out.toString());
                            outputs.push(out.toString());
                        })
                        createProc.stderr.on('data', (out) => {
                            outputs.push(out.toString());
                        })
                        createProc.on('close', (code) => {
                            outputs.should.matchAny(new RegExp(strings.create.create_app_spcified_doesnt_exist));
                            done();
                        })
                    });
                });
            });
            context('specified to name device create', function() {
                it('Creates a new scaffolding for a MatrixOS Application', function(done) {

                    var createProc = run('matrix', ['create', 'test'])
                    var outputs = new Array();

                    createProc.stdout.on('data', (out) => {
                        console.log('stdout>>>>>>>', out.toString());
                        outputs.push(out.toString());
                    })
                    createProc.stderr.on('data', (out) => {
                        outputs.push(out.toString());
                    })
                    createProc.on('close', (code) => {
                        outputs.should.matchAny(new RegExp(strings.create.create_app_successfully));
                        done();
                    })
                });
            });

        }); // finish create 'ERROR' 




        context('deploy', function() {
            context('No parameters specified', function() {
                it.skip('should show commands "deploy" usage', function(done) {
                    var deployProc = run('matrix', ['deploy']);
                    var outputs = new Array();

                    deployProc.stdout.on('data', (out) => {
                        console.log('stdout', out.toString());
                        outputs.push(out.toString());
                    })
                    deployProc.stderr.on('data', (out) => {
                        console.log('stderr', out.toString());
                        outputs.push(out.toString());
                    })
                    deployProc.on('close', (code) => {
                        console.log('close', code);
                        outputs.should.matchAny(new RegExp(strings.deploy.deploy_command_usage));
                        done();
                    })
                });
            });

            context('parameters specified', function() {
                context('unknown parameter', function() {
                    it.skip('should show an "parameter doesn\'t exist', function(done) {

                        var deployProc = run('matrix', ['deploy', 'XXXXX']);
                        var outputs = new Array();

                        deployProc.stdout.on('data', (out) => {
                            console.log('stdout', out.toString());
                            outputs.push(out.toString());
                        })
                        deployProc.stderr.on('data', (out) => {
                            outputs.push(out.toString());
                        })
                        deployProc.on('close', (code) => {
                            outputs.should.matchAny(new RegExp(strings.deploy.deploy_command_doesnt_exist));
                            done();
                        })
                    });
                });
                context('name device correct', function() {
                    it('Deploys an app to the active MatrixOS', function(done) {
                        var deployProc = run('matrix', ['deploy', 'vehicle']);
                        var outputs = new Array();

                        deployProc.stdout.on('data', (out) => {
                            console.log('stdout', out.toString());
                            outputs.push(out.toString());
                        })
                        deployProc.stderr.on('data', (out) => {
                            outputs.push(out.toString());
                        })
                        deployProc.on('close', (code) => {
                            outputs.should.matchAny(new RegExp(strings.deploy.deploy_app_successfully));
                            done();
                        })
                    });
                });

            });
        }); // finish deploy 'ERROR'




        context('trigger', function() {
            context('No parameters specified', function() {
                it.skip('should show commands "trigger" usage', function(done) {
                    var triggerProc = run('matrix', ['trigger']);
                    var outputs = new Array();

                    triggerProc.stdout.on('data', (out) => {
                        console.log('stdout', out.toString());
                        outputs.push(out.toString());
                    })
                    triggerProc.stderr.on('data', (out) => {
                        outputs.push(out.toString());
                    })
                    triggerProc.on('close', (code) => {
                        outputs.should.matchAny(new RegExp(strings.trigger.trigger_command_usage));
                        done();
                    })
                });
            });
            context('parameters specified', function() {
                context('unknown parameter specified  ', function() {
                    it.skip('should show an "parameter doesn\'t exist', function(done) {
                        var triggerProc = run('matrix', ['trigger', 'XXXXX']);
                        var outputs = new Array();

                        triggerProc.stdout.on('data', (out) => {
                            console.log('stdout', out.toString());
                            outputs.push(out.toString());
                        })
                        triggerProc.stderr.on('data', (out) => {
                            outputs.push(out.toString());
                        })
                        triggerProc.on('close', (code) => {
                            outputs.should.matchAny(new RegExp(strings.trigger.trigger_parameter_doesnt_exist));
                            done();
                        })
                    });
                });
                context(' parameter specified is trigger ', function() {
                    it('Runs a trigger test', function(done) {
                        var triggerProc = run('matrix', ['trigger', 'test']);
                        var outputs = new Array();

                        triggerProc.stdout.on('data', (out) => {
                            console.log('stdout', out.toString());
                            outputs.push(out.toString());
                        })
                        triggerProc.stderr.on('data', (out) => {
                            outputs.push(out.toString());
                            triggerProc.kill('SIGINT');
                        })
                        triggerProc.on('close', (code) => {
                            outputs.should.matchAny(new RegExp(strings.trigger.trigger_test_run_successfully));
                            done();
                        })
                    });
                });

            });

        }); //finish trigger ERROR (client registration fail)


        context('log', function() {
            context('No parameters specified', function() {
                it.skip('should show commands "log" usage', function(done) {
                    var triggerProc = run('matrix', ['log']);
                    var outputs = new Array();

                    triggerProc.stdout.on('data', (out) => {
                        outputs.push(out.toString());
                    })
                    triggerProc.stderr.on('data', (out) => {
                        outputs.push(out.toString());
                        triggerProc.kill('SIGINT');
                    })
                    triggerProc.on('close', (code) => {
                        outputs.should.matchAny(new RegExp(strings.log.log_command_usage));
                        done();
                    })
                });
            });
            context(' parameters specified', function() {
                context('no device and app assigned', function() {
                    it.skip('should show  "Select on device o app " ', function(done) {
                        var triggerProc = run('matrix', ['log', '']);
                        var outputs = new Array();

                        triggerProc.stdout.on('data', (out) => {
                            outputs.push(out.toString());
                            triggerProc.kill('SIGINT');
                        })
                        triggerProc.stderr.on('data', (out) => {
                            outputs.push(out.toString());
                            triggerProc.kill('SIGINT');
                        })
                        triggerProc.on('close', (code) => {
                            outputs.should.matchAny(new RegExp(strings.log.log_command_usage));
                            done();
                        })
                    });
                });
                context(' device and app assigned', function() {

                    context('unknown device and app specified', function() {
                        it.skip('should show commands "log" usage', function(done) {
                            var triggerProc = run('matrix', ['log', 'XXXXXXX', 'XXXXXXX']);
                            var outputs = new Array();

                            triggerProc.stdout.on('data', (out) => {
                                outputs.push(out.toString());
                                triggerProc.kill('SIGINT');
                            })
                            triggerProc.stderr.on('data', (out) => {
                                outputs.push(out.toString());
                                triggerProc.kill('SIGINT');
                            })
                            triggerProc.on('close', (code) => {
                                outputs.should.matchAny(new RegExp(strings.log.log_device_doesnt_exist));
                                done();
                            })
                        });
                    });
                    context('log', function() {
                        it('Logs output from selected MatrixOS and applications', function(done) {
                            var triggerProc = run('matrix', ['log', 'AdBeacon1', 'vehicle']);
                            var outputs = new Array();

                            triggerProc.stdout.on('data', (out) => {
                                outputs.push(out.toString());
                                triggerProc.kill('SIGINT');
                            })
                            triggerProc.stderr.on('data', (out) => {
                                outputs.push(out.toString());
                                triggerProc.kill('SIGINT');
                            })
                            triggerProc.on('close', (code) => {
                                outputs.should.matchAny(new RegExp(strings.log.log_successfully));
                                done();
                            })
                        });
                    });
                });
            });
        }); // finish log 'ERROR' 


    });
});

function readConfig() {
    return JSON.parse(require('fs').readFileSync('./tmp/store.json'));
}
