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
        sim_restore_warning :''
    }
}


describe('Matrix CLI commands', function () {
    context('Not logged in {', function () {
        it('should show a log in warning ', function (done) {
            var notloggedProc = run('matrix', ['']);
            var outputs = [];
            notloggedProc.stdout.on('data', function (out) {
                outputs.push(out.toString());
            });

            notloggedProc.on('close', function (code) {
                (outputs.length).should.be.above(15);
                done();
            });

        });

        context('login ', function () {

            after(function (done) {
                exec('matrix logout')
                console.log('cierra sesion');
                done();
            })

            it('should request user credentials...', function (done) {
                this.timeout(15000);
                var loginProc = run('matrix', ['login']);
                var outputs = [];
                loginProc.stdout.on('data', function (out) {
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

                loginProc.on('close', function (code) {
                    outputs.should.matchAny(/username/);
                    outputs.should.matchAny(/password/);
                    done();
                });

            });

        });

        context('logout Brayan', function () {

            it.skip('should show a logout in warning ', function (done) {
                var logoutProc = run('matrix', ['logout']);
                var outputs = new Array();

                logoutProc.stdout.on('data', function (out) {
                    outputs.push(out.toString());
                });

                logoutProc.on('close', function (code) {
                    outputs.should.matchAny(new RegExp(strings.login.login_warning));
                    console.log('Close', outputs.toString());
                    done();
                });
            });
        }); // finish Logout


        context('use ', function () {
            it.skip('should show a in warning', function (done) {
                var useProc = run('matrix', ['use']);
                var outputs = new Array();

                useProc.stdout.on('data', function (out) {
                    outputs.push(out.toString());
                });

                useProc.on('close', function (code) {
                    outputs.should.matchAny(new RegExp(strings.login.login_warning));
                    done();
                });
            });
        }); // finish use


        context('sim', function () {
            it.skip('should show a log in warning', function (done) {
                var simProc = run('matrix', ['sim']);
                var outputs = new Array();

                simProc.stdout.on('data', function (out) {
                    console.log('>>>>', out.toString());
                    outputs.push(out.toString());
                });

                simProc.on('close', function (code) {
                    outputs.should.matchAny(new RegExp(strings.login.login_warning))
                    console.log('close', outputs)
                    done();
                });
            });
        }); // finish sim




        context('list', function () {
            it.skip('should show a log in warning', function (done) {
                var outputs = new Array();
                var listProc = run('matrix', ['list']);
                listProc.stdout.on('data', function (out) {
                    outputs.push(out.toString());
                });
                listProc.on('close', function (code) {
                    outputs.should.matchAny(new RegExp(strings.login.login_warning))
                    done();
                });
            });
        }); // finish list



        context('set', function () {

            it.skip('should show a log in warning', function (done) {
                var outputs = new Array();
                var setProc = run('matrix', ['set']);

                setProc.stdout.on('data', function (out) {
                    console.log('>>>>>', out.toString());
                    outputs.push(out.toString());
                });

                setProc.on('close', function (code) {
                    console.log('close', outputs);
                    outputs.should.matchAny(new RegExp(strings.login.login_warning))

                    done();
                });

            });
        }); // finish set

        context('reboot', function () {
            it.skip('should show a log in warning', function (done) {
                var rebootProc = run('matrix', ['reboot']);
                var outputs = new Array();
                rebootProc.stdout.on('data', function (out) {
                    outputs.push(out.toString());
                });

                rebootProc.on('close', function (code) {
                    outputs.should.matchAny(new RegExp(strings.login.login_warning))
                    done();
                });

            });
        }); // finish reboot

        context('search', function () {
            it.skip('should show a log in warning', function (done) {
                var searchProc = run('matrix', ['search']);
                var outputs = new Array();
                searchProc.stdout.on('data', function (out) {
                    outputs.push(out.toString());
                });

                searchProc.on('close', function (code) {
                    outputs.should.matchAny(new RegExp(strings.login.login_warning))
                    done();
                });
            });
        }); //finish search



        context('install', function () {
            it.skip('should show a log in warning', function (done) {
                var installProc = run('matrix', ['install']);
                var errors = new Array();

                installProc.stderr.on('data', function (out) {
                    errors.push(out.toString());
                });

                installProc.on('close', function (code) {
                    errors.should.matchAny(new RegExp(strings.login.login_warning));
                    done();
                });

            });
        }); //finis install 

        context('config', function () {
            it.skip('should show a log in warning', function (done) {
                var configProc = run('matrix', ['config']);
                var errors = new Array();

                configProc.stderr.on('data', function (out) {
                    errors.push(out.toString());
                });

                configProc.on('close', function (code) {
                    errors.should.matchAny(new RegExp(strings.login.login_warning))
                    done();
                });
            });
        }); //finish config 


        context('uninstall', function () {
            it.skip('should show a log in warning', function (done) {
                var uninstallProc = run('matrix', ['uninstall']);
                var errors = new Array();
                uninstallProc.stderr.on('data', function (out) {
                    errors.push(out.toString());
                });

                uninstallProc.on('close', function (code) {
                    errors.should.matchAny(new RegExp(strings.login.login_warning))
                    done();
                });

            });
        }); //finish uninstall 


        context('update', function () {
            it.skip('should show a log in warning', function (done) {
                var updateProc = run('matrix', ['update']);
                var outputs = new Array();
                updateProc.stdout.on('data', function (out) {
                    console.log('>>>>', out.toString());
                    outputs.push(out.toString());
                });

                updateProc.on('close', function (code) {
                    outputs.should.matchAny(new RegExp(strings.login.login_warning))
                    console.log('close', outputs)
                    done();
                });

            });
        }); //finish update

        context('start', function () {
            it.skip('should show a log in warning', function (done) {
                var startProc = run('matrix', ['start']);
                var outputs = new Array();

                startProc.stdout.on('data', function (out) {
                    outputs.push(out.toString());
                });

                startProc.on('close', function (code) {
                    outputs.should.matchAny(new RegExp(strings.login.login_warning))
                    done();
                });

            });
        }); //finish start

        context('stop', function () {
            it.skip('should show a log in warning', function (done) {
                var stopProc = run('matrix', ['stop']);
                var outputs = new Array();

                stopProc.stdout.on('data', function (out) {
                    outputs.push(out.toString());
                });

                stopProc.on('close', function (code) {
                    outputs.should.matchAny(new RegExp(strings.login.login_warning))
                    done();
                });

            });
        }); //finish stop

        context('restart', function () {
            it.skip('should show a log in warning', function (done) {
                var restartProc = run('matrix', ['restart']);
                var errors = new Array();

                restartProc.stderr.on('data', function (out) {
                    errors.push(out.toString());
                });

                restartProc.on('close', function (code) {
                    errors.should.matchAny(new RegExp(strings.login.login_warning))
                    done();
                });

            });
        }); //finish restart 

       context('create', function () {
            it.skip('should show a log in warning', function (done) {
                var createProc = run('matrix', ['create']);
                var errors = new Array();
                createProc.stderr.on('data', function (out) {
                    errors.push(out.toString());
                });

                createProc.on('close', function (code) {
                    errors.should.matchAny(new RegExp(strings.login.login_warning))
                    done();
                });
            });
        }); //finish create 

         context('deploy', function () {
            it.skip('should show a log in warning', function (done) {
                var deployProc = run('matrix', ['deploy']);
                var errors = new Array();

                deployProc.stderr.on('data', function (out) {
                    errors.push(out.toString());
                });

                deployProc.on('close', function (code) {
                    errors.should.matchAny(new RegExp(strings.login.login_warning))
                    done();
                });
            });
        }); //finish deploy 

        context('trigger', function () {
            it.skip('should show a log in warning', function (done) {
                var triggerProc = run('matrix', ['trigger']);
                var errors = new Array();
                triggerProc.stderr.on('data', function (out) {
                    errors.push(out.toString());
                });

                triggerProc.on('close', function (code) {
                    errors.should.matchAny(new RegExp(strings.login.login_warning))
                    done();
                });

            });
        }); //finish trigger 

        context('log }', function () {
            it.skip('should show a log in warning Log', function (done) {
                var logProc = run('matrix', ['log']);
                var outputs = new Array();
                logProc.stdout.on('data', function (out) {
                    outputs.push(out.toString());
                });

                logProc.on('close', function (code) {
                    outputs.should.matchAny(new RegExp(strings.login.login_warning))
                    done();
                });
            });
        }); //finish log
    });







    context('Logged in {', function () {
        before(function (done) {
            this.timeout(15000);
              var loginProc = run('matrix', ['login']);
                 loginProc.stdout.on('data', function (out) {
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

        context('No parameters specified', function () {
            it.skip('should show the matrix command usage', function (done) {
                var logProc = run('matrix', ['']);
                var outputs = new Array();
                logProc.stdout.on('data', function (out) {
                    outputs.push(out.toString());
                });

                logProc.on('close', function (code) {
                    (outputs.length).should.be.above(15);//cambio
                    done();
                });

            });
        }); // finish matrix 

        context('Parameters specified', function () {

            context('login_NDR', function () {
                it.skip('should show an "already logged in" warning', function (done) {

                    var loginProc = run('matrix', ['login']);
                    var outputs = new Array();
                    loginProc.stdout.on('data', function (out) {
                        outputs.push(out.toString());
                        outputs.should.matchAny(new RegExp(strings.login.already_logged_in_warning));
                        done();
                    });
                });
            }); // finish login


             context('logout', function () {
                it.skip('should log out', function (done) {
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

            context('use', function () { 
                 context('No parameters specified ', function () {
                    it('Show "use" command usage', function (done) {
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

                context('Parameters specified', function () {

                    context('Specified device doesn\'t exist', function () {
                        it.skip('should show an "invalid device" warning', function (done) {
                            var useDProc = run('matrix', ['use','xx']);
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
                    context('Current user doesn\'t have permission to use specified device', function () {
                        it('should show an "invalid device" warning', function (done) {
                            var useProc = run('matrix', ['use','xxx']);
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
                     context('Specified device exists', function () {
                        it('Show set device as current device', function (done) {
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

            context('sim', function () {

                context('No parameters specified ', function () {
                    it('Show "sim" command usage', function (done) {
                        var simProc = run('matrix', ['sim','']);
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
                context('Parameters specified init ', function () {
                   
                    context('init', function () {
                        it('should request simulator settings', function (done) {
                            var simProc = run('matrix', ['sim', 'init']);
                            var outputs = new Array(); 
                            simProc.stdout.on('data', function(out) {
                                out.should.matchAny(new RegExp(strings.sim.sim_init_request_credencials));
                                    done();
                            });
                            
                       
                        });
                    
                    });

                    context('Simulator hasn\'t been initialized', function () {
                        context('restore', function () {
                            it.skip('should show an "initialize simulator" warning', function (done) { 
                                var simProc = run('matrix', ['sim', 'init']);
                            });
                        });

                        context('start', function () {
                            it.skip('should show an "initialize simulator" warning', function (done) { });
                        });

                        context('stop', function () {
                            it.skip('should show an "initialize simulator" warning', function (done) { });
                        });

                        context('save', function () {
                            it.skip('should show an "initialize simulator" warning', function (done) { });
                        });

                        context('clear', function () {
                            it.skip('should show an "initialize simulator" warning', function (done) { });
                        });
                    });

                    context('Simulator initialized', function () {
                        context('restore', function () {
                            it.skip('should reset the simulator', function (done) { });
                        });

                        context('start', function () {
                            it.skip('should start MatrixOS virtual environment', function (done) { });
                        });

                        context('stop', function () {
                            it.skip('should stop MatrixOS virtual environment', function (done) { });
                        });

                        context('save', function () {
                            it.skip('should save MatrixOS state, use after deploy / install', function (done) { });
                        });

                        context('clear', function () {
                            it.skip('should remove simulation local data', function (done) { });
                        });
                    });

                    context('Unknown parameter specified', function () {
                        it.skip('should display an "unknown parameter warning"', function (done) { });
                    });
                });
            }); //finish sim

            context('list', function () {
                context('No parameters specified', function () {
                    it.skip('Show "list" command usage', function (done) { });
                });
                context('Parameters specified', function () {
                    context('devices', function () {
                        it.skip('display available devices', function (done) { });
                    });

                    context('groups', function () {
                        it.skip('display groups of devices', function (done) { });
                    });

                    context('apps', function () {
                        it.skip('display apps on current device', function (done) { });
                    });

                    context('all', function () {
                        it.skip('display all devices with installed apps', function (done) { });
                    });

                    context('Unknown parameter specified', function () {
                        it.skip('should display an "unknown parameter warning"', function (done) { });
                    });
                });
            }); //list

            //DEVICE REQUIRED
            context('No device selected', function () {
                context('set', function () {
                    it.skip('should show a "Select a Device" warning', function (done) { });
                }); //set

                context('reboot', function () {
                    it.skip('should show a "Select a Device" warning', function (done) { });
                }); //reboot

                context('search', function () {
                    it.skip('should show a "Select a Device" warning', function (done) { });
                }); //search

                context('install', function () {
                    it.skip('should show a "Select a Device" warning', function (done) { });
                }); //install

                context('config', function () {
                    it.skip('should show a "Select a Device" warning', function (done) { });
                }); //config

                context('uninstall', function () {
                    it.skip('should show a "Select a Device" warning', function (done) { });
                }); //uninstall

                context('update', function () {
                    it.skip('should show a "Select a Device" warning', function (done) { });
                }); //update

                context('start', function () {
                    it.skip('should show a "Select a Device" warning', function (done) { });
                }); //start

                context('stop', function () {
                    it.skip('should show a "Select a Device" warning', function (done) { });
                }); //stop

                context('restart', function () {
                    it.skip('should show a "Select a Device" warning', function (done) { });
                }); //restart

                context('create', function () {
                    it.skip('should show a "Select a Device" warning', function (done) { });
                }); //create

                context('deploy', function () {
                    it.skip('should show a "Select a Device" warning', function (done) { });
                }); //deploy

                context('trigger', function () {
                    it.skip('should show a "Select a Device" warning', function (done) { });
                }); //trigger

                context('log', function () {
                    it.skip('should show a "Select a Device" warning', function (done) { });
                }); //log
            });

            context('Device selected', function () {
                context('set', function () {
                    context('No parameters specified', function () {
                        it.skip('should command "set" usage', function (done) { });
                    });
                    context('Parameters specified', function () {
                        context('env', function () {
                            context('No parameters specified', function () {
                                it.skip('should show command "set env" usage', function (done) { });
                            });
                            context('Parameters specified', function () {
                                context('sandbox', function () {
                                    it.skip('should set the device environment to sandbox', function (done) { });
                                });
                                context('production', function () {
                                    it.skip('should set the device environment to production', function (done) { });
                                });
                            });
                        });
                        context('config', function () {
                            context('No parameters specified', function () {
                                it.skip('should show command "set config" usage', function (done) { });
                            });
                            context('Parameters specified', function () {
                                context('Missing app name', function () {
                                    it.skip('should show command "set config" usage', function (done) { });
                                });
                                context('Invalid app name', function () {
                                    it.skip('should show an "invalid app" warning', function (done) { });
                                });
                                context('Valid app name', function () {
                                    context('Missing proper key value setting', function () {
                                        it.skip('should show command "set config" usage', function (done) { });
                                    });
                                    context('Valid key value setting', function () {
                                        it.skip('should set the configuration value for the specified key', function (done) { });
                                    });
                                });
                            });
                        }); //finish set config
                    });
                }); //finish  set

                context('reboot', function () {
                    context('Unable to reach device', function () {
                        it.skip('should return an error', function (done) { });
                    });
                    context('Device is alive', function () {
                        it.skip('should reboot the current device', function (done) { });
                    });
                }); //finish reboot

                context('search', function () {
                    context('No parameters specified', function () {
                        it.skip('should show command "search" usage', function (done) { });
                    });

                    context('Parameters specified', function () {
                        context('search term has less than 2 characters', function () {
                            it.skip('should show a search term warning', function (done) { });
                        });

                        context('search term has more than 2 characters', function () {
                            it.skip('should list the results of an app search', function (done) { });
                        });
                    });

                }); //finish search

                context('install', function () {
                    context('No parameters specified', function () {
                        it.skip('should show command "search" usage', function (done) { });
                    });

                    context('Parameters specified', function () {
                        context('Invalid app/sensor name', function () {
                            it.skip('should show invalid "app/sensor" warning', function (done) { });
                        });

                        context('Valid app/sensor name', function () {
                            context('app is already installed', function () {
                                it.skip('should show warning app already installed', function (done) { });
                            });
                            context('app isn\'t already installed', function () {
                                it.skip('should install the app or sensor specified to active MatrixOS device', function (done) { });
                            });
                        });
                    });
                }); //finish install

                context('config', function () {
                    context('No parameters specified', function () {
                        it.skip('should show device configurations', function (done) { });
                    });

                    context('Parameters specified', function () {
                        context('specified app doesn\'t exist', function () {
                            it.skip('should show an "specified app doesn\'t exist" warning', function (done) { });
                        });
                        context('specified app exists', function () {
                            context('app', function () {
                                it.skip('should show application configurations', function (done) { });
                            });

                            context('app key', function () {
                                context('specified key doesn\'t exist', function () {
                                    it.skip('should show a "specified key doesn\'t exist" warning', function (done) { });
                                });

                                context('specified key exists', function () {
                                    it.skip('should show application configuration key', function (done) { });
                                });
                            });

                            context('app key value', function () {
                                it.skip('should set application configuration key value', function (done) { });
                            });
                        });
                    });
                }); //finish config

                context('uninstall', function () {
                    context('No parameters specified', function () {
                        it.skip('should show command "uninstall" usage', function (done) { });
                    });

                    context('Parameters specified', function () {
                        context('specified app doesn\'t exist', function () {
                            it.skip('should show a "specified app doesn\'t exist" warning', function (done) { });
                        });

                        context('specified app exists', function () {
                            context('device is offline', function () {
                                it.skip('should show a "device is offline" warning', function (done) { });
                            });

                            context('device is online', function () {
                                it.skip('should uninstall the specified app', function (done) { });
                            });
                        });
                    });
                }); //finish uninstall

                context('update', function () {

                    context('No parameters specified', function () {
                        it.skip('should show command "update" usage', function (done) { });
                    });

                    context('Parameters specified', function () {
                        context('app', function () {
                            context('device doesn\'t have the app installed', function () {
                                it.skip('should show a "device doesn\'t have the app installed"', function (done) { });
                            });

                            context('device has the app installed', function () {
                                it.skip('should update the application to its latest version', function (done) { });
                            });

                            context('app version', function () {
                                context('version doesn\'t exist', function () {
                                    it.skip('should show a version doesn\'t exist warning', function (done) { });
                                });

                                context('version exists', function () {
                                    it.skip('should update to that version', function (done) { });
                                });
                            });

                            context('unknown parameter', function () {
                                it.skip('should show a "parameter doesn\'t exist "', function (done) { });
                            });
                        });
                    }); //finish update


                    context('start', function () {

                        context('No parameters specified', function () {
                            it.skip('should show command "start" usage', function (done) { });
                        });

                        context(' parameters specified', function () {
                            context('start', function () {
                                it.skip('Starts an app running on the active MatrixOS', function (done) { });
                            });
                            context('unknown parameter', function () {
                                it.skip('should show an "parameter doesn\'t exist', function (done) { });
                            });

                        });
                    }); //finish start




                    context('stop', function () {

                        context('No parameters specified', function () {
                            it.skip('should show command "stop" usage', function (done) { });
                        });

                        context(' parameters specified', function () {
                            context('unknown parameter', function () {
                                it.skip('should show an "parameter doesn\'t exist', function (done) { });
                            });
                            context('stop', function () {
                                it.skip('Stops an app running on the active MatrixOS', function (done) { });
                            });
                        });
                    }); //stop


                    context('restart', function () {

                        context('No parameters specified', function () {
                            it.skip('should show command "restart" usage', function (done) { });
                        });

                        context(' parameters specified', function () {
                            context('unknown parameter', function () {
                                it.skip('should show an "parameter doesn\'t exist', function (done) { });
                            });

                            context('restart', function () {
                                it.skip('Restarts an app running on the MatrixOS', function (done) { });

                            });
                        });
                    }); //stop



                    context('create', function () {

                        context('No parameters specified', function () {
                            it.skip('should show commands "create" usage', function (done) { });
                        });

                        context('parameter specified', function () {
                            context('unknown parameter', function () {
                                it.skip('should show an "parameter doesn\'t exist', function (done) { });
                            });
                        });
                        context('create', function () {
                            context('No name specified to device create', function () {
                                it.skip('should show an message "specified an name to device"', function (done) { });
                            });
                            context('specified to name device create', function () {
                                it.skip('Creates a new scaffolding for a MatrixOS Application', function (done) { });
                            });
                        });
                    });
                }); //finish create




                context('deploy', function () {
                    context('No parameters specified', function () {
                        it.skip('should show commands "deploy" usage', function (done) { });
                    });

                    context('parameters specified', function () {
                        context('unknown parameter', function () {
                            it.skip('should show an "parameter doesn\'t exist', function (done) { });
                        });
                        context('deploy', function () {
                            it.skip('Deploys an app to the active MatrixOS', function (done) { });
                        });

                    });
                }); //finish deploy




                context('trigger', function () {
                    context('No parameters specified', function () {
                        it.skip('should show commands "trigger" usage', function (done) { });
                    });
                    context('parameters specified', function () {
                        context('unknown parameter specified  ', function () {
                            it.skip('should show an "parameter doesn\'t exist', function (done) { });
                        });
                        context(' parameter specified is trigger ', function () {
                            it.skip('Runs a trigger test', function (done) { });
                        });

                    });

                }); //trigger


                context('log', function () {
                    context('No parameters specified', function () {
                        it.skip('should show commands "log" usage', function (done) { });
                    });
                    context(' parameters specified', function () {
                        context('no device and app assigned', function () {
                            it.skip('should show  "Select on device o app " ', function (done) { });
                        });
                        context(' device and app assigned', function () {

                            context('unknown parameter specified', function () {
                                it.skip('should show commands "log" usage', function (done) { });
                            });
                            context('log', function () {
                                it.skip('Logs output from selected MatrixOS and applications', function (done) { });
                            });
                        });
                    });
                }); //finish log
            });
        });
    });
});


function readConfig() {
    return JSON.parse(require('fs').readFileSync('./tmp/store.json'));
}