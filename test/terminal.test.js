var run = require('child_process').spawn;
var exec = require('child_process').exec;
var colors = require('colors');
var should = require('should');


describe('Matrix CLI commands', function() {
    context('Not logged in {', function() {
        it('should show a log in warning ', function(done) {
            var notloggedProc = run('matrix', ['']);
            var outputs = [];
            notloggedProc.stdout.on('data', function(out) {
                outputs.push(out.toString());
            });

            notloggedProc.on('close', function (code) {
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
                var outputs = [];
                loginProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());
                    if (out.indexOf('username') > -1) {
                        loginProc.stdin.write('demo.admobilize@gmail.com\n')
                        //outputs.push(out.toString());
                        console.log('brayan111',outputs);
                    } else if (out.toString().indexOf('password') > -1) {
                        loginProc.stdin.write('admobdemo2016\n')
                        console.log('brayan222--',outputs);
                    } else if (out.toString().indexOf('Login Successful') > -1) {
                        console.log('brayannn--',outputs);
                        // console.log(out.toString().red);
                        if (readConfig().user.hasOwnProperty('token')) {
                            console.log('brayannn--',outputs.push(out.toString())); 
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
                var outputs = [];
                var logoutProc = run('matrix', ['logout']);
                
                logoutProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());
                }); 

                logoutProc.on('close', function(code) {
                    
                   outputs.should.matchAny(/login please/);
                        console.log('Close',outputs.toString());             
                        done();
                });
            });
        }); // finish Logout


        context('use Brayan', function() {
            it('should show a in warning', function(done) {
                var useProc = run('matrix', ['use']);
                var outputs = [];

                useProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());
                });

                useProc.on('close', function(code) {
                    console.log('Use "Matrix Login"'.yellow);
                    console.log('Close'.red);
                    done();
                });

            });
        }); //  use


        context('sim', function() {
            it('should show a log in warning', function(done) {
                var simProc = run('matrix', ['sim']);

                simProc.stdout.on('data', function(out) {});
                simProc.on('close', function(code) {
                    console.log('Use "Matrix Login"'.yellow);
                    console.log('Close'.red);
                    done();
                });

            });
        }); //sim




        context('list', function() {
            it('should show a log in warning', function(done) {
                var listProc = run('matrix', ['list']);

                listProc.stdout.on('data', function(out) {});
                listProc.on('close', function(code) {
                    console.log('Use "Matrix Login"'.yellow);
                    console.log('Close'.red);
                    done();
                });
            });
        }); //list

        context('set', function() {
            it('should show a log in warning', function(done) {
                var setProc = run('matrix', ['set']);

                setProc.stdout.on('data', function(out) {});
                setProc.on('close', function(code) {
                    console.log('Use "Matrix Login"'.yellow);
                    console.log('Close'.red);
                    done();
                });
            });
        }); //set

        context('reboot', function() {
            it('should show a log in warning', function(done) {
                var rebootProc = run('matrix', ['reboot']);

                rebootProc.stdout.on('data', function(out) {});
                rebootProc.on('close', function(code) {
                    console.log('Use "Matrix Login"'.yellow);
                    console.log('Close'.red);
                    done();
                });
            });
        }); //reboot

        context('search', function() {
            it('should show a log in warning', function(done) {
                var searchProc = run('matrix', ['search']);

                searchProc.stdout.on('data', function(out) {});
                searchProc.on('close', function(code) {
                    console.log('Use "Matrix Login"'.yellow);
                    console.log('Close'.red);
                    done();
                });
            });
        }); //search

        context('install', function() {
            it('should show a log in warning', function(done) {
                var installProc = run('matrix', ['install']);

                installProc.stdout.on('data', function(out) {});
                installProc.on('close', function(code) {
                    console.log('Use "Matrix Login"'.yellow);
                    console.log('Close'.red);
                    done();
                });
            });
        }); //install

        context('config', function() {
            it('should show a log in warning', function(done) {
                var configProc = run('matrix', ['config']);

                configProc.stdout.on('data', function(out) {});
                configProc.on('close', function(code) {
                    console.log('Use "Matrix Login"'.yellow);
                    console.log('Close'.red);
                    done();
                });
            });
        }); //config

        context('uninstall', function() {
            it('should show a log in warning', function(done) {
                var uninstallProc = run('matrix', ['uninstall']);

                uninstallProc.stdout.on('data', function(out) {});
                uninstallProc.on('close', function(code) {
                    console.log('Use "Matrix Login"'.yellow);
                    console.log('Close'.red);
                    done();
                });
            });
        }); //uninstall

        context('update', function() {
            it('should show a log in warning', function(done) {
                var updateProc = run('matrix', ['update']);

                updateProc.stdout.on('data', function(out) {});
                updateProc.on('close', function(code) {
                    console.log('Use "Matrix Login"'.yellow);
                    console.log('Close'.red);
                    done();
                });
            });
        }); //update

        context('start', function() {
            it('should show a log in warning', function(done) {
                var startProc = run('matrix', ['start']);

                startProc.stdout.on('data', function(out) {});
                startProc.on('close', function(code) {
                    console.log('Use "Matrix Login"'.yellow);
                    console.log('Close'.red);
                    done();
                });
            });
        }); //start

        context('stop', function() {
            it('should show a log in warning', function(done) {
                var stopProc = run('matrix', ['stop']);

                stopProc.stdout.on('data', function(out) {});
                stopProc.on('close', function(code) {
                    console.log('Use "Matrix Login"'.yellow);
                    console.log('Close'.red);
                    done();
                });
            });
        }); //stop

        context('restart', function() {
            it('should show a log in warning', function(done) {
                var restartProc = run('matrix', ['restart']);

                restartProc.stdout.on('data', function(out) {});
                restartProc.on('close', function(code) {
                    console.log('Use "Matrix Login"'.yellow);
                    console.log('Close'.red);
                    done();
                });
            });
        }); //restart

        context('create', function() {
            it('should show a log in warning', function(done) {
                var createProc = run('matrix', ['create']);

                createProc.stdout.on('data', function(out) {});
                createProc.on('close', function(code) {
                    console.log('Use "Matrix Login"'.yellow);
                    console.log('Close'.red);
                    done();
                });
            });
        }); //create

        context('deploy', function() {
            it('should show a log in warning', function(done) {
                var deployProc = run('matrix', ['deploy']);

                deployProc.stdout.on('data', function(out) {});
                deployProc.on('close', function(code) {
                    console.log('Use "Matrix Login"'.yellow);
                    console.log('Close'.red);
                    done();
                });
            });
        }); //deploy

        context('trigger', function() {
            it('should show a log in warning', function(done) {
                var triggerProc = run('matrix', ['trigger']);

                triggerProc.stdout.on('data', function(out) {});
                triggerProc.on('close', function(code) {
                    console.log('Use "Matrix Login"'.yellow);
                    console.log('Close'.red);
                    done();
                });
            });
        }); //trigger

        context('log }', function() {
            it('should show a log in warning Log', function(done) {
                var logProc = run('matrix', ['log']);

                logProc.stdout.on('data', function(out) {});

                logProc.on('close', function(code) {
                    console.log('Use "Matrix Login"'.yellow);
                    console.log('Close'.red);
                    done();
                });
            });
        }); //log
    });

    context('Logged in {', function() {
        /* before(function (done) {
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
                             done();
                         }
                     }
                     
                 });
             exec('matrix login')
                   done();
                 })*/
        //NO DEVICE REQUIRED
        context('No parameters specified', function() {
            it('should show the matrix command usage', function(done) {
                var logProc = run('matrix', ['']);

                logProc.stdout.on('data', function(out) {});

                logProc.on('close', function(code) {
                    console.log('Use on parameter " matrix (parameter)"'.yellow);
                    console.log('Close'.red);
                    done();
                });

            });
        });
        context('Parameters specified', function() {

            context('login_NDR', function() {
                it('should show an "already logged in" warning !!!!', function(done) {
                    var loginProc = run('matrix', ['login']);
                    loginProc.stdout.on('data', function(out) {
                        console.log('already logged, use other parameter'.yellow);
                        //console.log('brayan', out.toString());
                        done();
                    });

                    loginProc.on('close', function(code) {
                        console.log('already logged in use other parameter'.yellow);
                        console.log('Close'.red);
                        done();
                    });
                });
            }); // finish login

            context('logout', function() {
                it('should log out', function(done) {

                    var logoutProc = run('matrix', ['logout']);
                    logoutProc.stdout.on('data', function(out) {});

                    logoutProc.on('close', function(code) {
                        console.log('log out  Successfully.....'.magenta);
                        console.log('Close'.red);
                        done();
                    });
                });
            }); //finish Logout

            context('use', function() {
                context('No parameters specified ', function() {
                    it('Show "use" command usage', function(done) {
                        var useProc = run('matrix', ['']);

                        useProc.stdout.on('data', function(out) {});

                        useProc.on('close', function(code) {
                            console.log('Please select on device "matrix use (devicename)"'.yellow);
                            console.log('Close'.red);
                            done();
                        });

                    });
                });

                context('Parameters specified', function() {

                    context('Specified device doesn\'t exist', function() {
                        it('should show an "invalid device" warning', function(done) {
                            var useDProc = run('matrix', ['use', '']);

                            //console.log('BRAYAN',useDProc);
                            useDProc.stdout.on('data', function(out) {
                                console.log('BRAYAN', out.toString().red);
                            });

                            useDProc.on('close', function(code) {
                                console.log('invalid device'.yellow);
                                console.log('Close'.red);
                                done();
                            });
                        });

                    });
                    context('Current user doesn\'t have permission to use specified device', function() {
                        it('should show an "invalid device" warning', function(done) {
                            var useProc = run('matrix', ['use']);

                            useProc.stdout.on('data', function(out) {});

                            useProc.on('close', function(code) {
                                console.log('invalid device (doesn\'t have permission)'.yellow);
                                console.log('Close'.red);
                                done();
                            });
                        });
                    });
                    context('Specified device exists', function() {
                        it('Show set device as current device', function(done) {
                            var useProc = run('matrix', ['use', 'AdBeacon1']);
                            useProc.stdout.on('data', function(out) {});
                            useProc.on('close', function(code) {
                                console.log('Device selllllect successfully........'.cyan);
                                console.log('Close'.red);
                                done();
                            });

                        });

                    });
                });
            }); //use

            context('sim', function() {

                context('No parameters specified ', function() {
                    it('Show "sim" command usage', function(done) {
                        var simProc = run('matrix', ['sim']);
                        simProc.stdout.on('data', function(out) {});
                        simProc.on('close', function(code) {
                            console.log('Please select on device "matrix sim [ init, restore, start, stop, save, clear ]"'.cyan);
                            console.log('Close'.red);
                            done();
                        });                        
                    });
                });
                context('Parameters specified init brayan', function() {
                    context('init', function() {
                        it('should request simulator settings 1!!', function (done) {
                              /* var loginProc = run('matrix', ['login']);
                        loginProc.stdout.on('data', function(out) {
                            
                            if (out.toString().indexOf('username') > -1) {
                                //console.log('>>>>>>>>>>>USERNAME');
                                loginProc.stdin.write('demo.admobilize@gmail.com\n')
                            } else if (out.toString().indexOf('password') > -1) {
                               // console.log('>>>>>>>>>>>PASSWORDDD');
                                loginProc.stdin.write('admobdemo2016\n')
                            } else if (out.toString().indexOf('Login Successful') > -1) {
                                //console.log('>>>>>>>>>>LOGIN1');
                                // console.log(out.toString().red);
                                if (readConfig().user.hasOwnProperty('token')) {
                                  //  console.log('>>>>>>>>>>>TOKENN');
                                    console.log(out.toString().red);
                                    //done();
                                }
                            }
                               });*/
                            
                            var loginProc = run('matrix', ['sim', 'init']);
                            loginProc.stdout.on('data', function(out) {
                                    //console.log('Brayan >>>>>>>',out.toString());
                                if (out.toString().indexOf('Please') > -1) {
                                    loginProc.stdin.write('\n'),
                                        loginProc.stdin.write('AAAA\n');
                                    //console.log('>>>>>>>>>>>Please', out.toString());
                                if (out.toString().indexOf('name') > -1) {
                                    console.log('>>>>>>>>>>>NAMEEEE',out.toString());
                                    loginProc.stdin.write('AAAAAAA\n')
                                } else if (out.toString().indexOf('description') > -1) {
                                    console.log('>>>>>>>>>>>description');
                                    loginProc.stdin.write('XAAA\n')
                                } else if (out.toString().indexOf('Login Successful') > -1) {
                                    console.log('>>>>>>>>>>NOOOO>');
                                    // console.log(out.toString().red);
                                    if (readConfig().user.hasOwnProperty('token')) {
                                        console.log('>>>>>>>>>>reddddd>');
                                        console.log(out.toString().red);
                                        done();
                                    }
                                    console.log(out.toString());

                                }  
                            }
                            });

    loginProc.on('close', function(code) {
        console.log('initialize your simulator'.cyan);
        console.log('Close'.red);
        done();
    });
});
                        /*it('should request simulator settings 1!!', function(done) {
                            console.log('>>>>>>>>>HOLAAAAA>');
                            var simProc = run('matrix', ['sim', 'init']);
                             console.log('>>>>>>>>>HOLAAAAA 555');
                            simProc.stdout.on('data', function(out) {
                                console.log('>>>>>>>>>DANNNN>');
                                if (out.toString().indexOf('Please') > -1) {
                                    loginProc.stdin.write('\n')
                                            console.log('>>>>>>>>>>>Please',out.toString());
                                        } else if (out.toString().indexOf('name') > -1) {
                                            console.log('>>>>>>>>>>>NAME');
                                            loginProc.stdin.write('XXXXXXX\n')
                                        } else if (out.toString().indexOf('description') > -1) {
                                            console.log('>>>>>>>>>>>description');
                                            loginProc.stdin.write('XXXXXXX\n')
                                        }else if (out.toString().indexOf('Login Successful') > -1) {
                                            console.log('>>>>>>>>>>NOOOO>');
                                            // console.log(out.toString().red);
                                            if (readConfig().user.hasOwnProperty('token')) {
                                                console.log('>>>>>>>>>>reddddd>');
                                                console.log(out.toString().red);
                                                done();
                                            }
                                            console.log(out.toString());
                                 
                                     }  
                            });

                            simProc.on('close', function(code) {
                                console.log('BRAYAN');
                                console.log('Please enter simulatorName'.cyan);
                                console.log('Close'.red);
                                done();
                            });
                        }); */
                    });

                    context('Simulator hasn\'t been initialized', function() {
                        context('restore', function() {
                            it.skip('should show an "initialize simulator" warning', function(done) {});
                        });

                        context('start', function() {
                            it.skip('should show an "initialize simulator" warning', function(done) {});
                        });

                        context('stop', function() {
                            it.skip('should show an "initialize simulator" warning', function(done) {});
                        });

                        context('save', function() {
                            it.skip('should show an "initialize simulator" warning', function(done) {});
                        });

                        context('clear', function() {
                            it.skip('should show an "initialize simulator" warning', function(done) {});
                        });
                    });

                    context('Simulator initialized', function() {
                        context('restore', function() {
                            it.skip('should reset the simulator', function(done) {});
                        });

                        context('start', function() {
                            it.skip('should start MatrixOS virtual environment', function(done) {});
                        });

                        context('stop', function() {
                            it.skip('should stop MatrixOS virtual environment', function(done) {});
                        });

                        context('save', function() {
                            it.skip('should save MatrixOS state, use after deploy / install', function(done) {});
                        });

                        context('clear', function() {
                            it.skip('should remove simulation local data', function(done) {});
                        });
                    });

                    context('Unknown parameter specified', function() {
                        it.skip('should display an "unknown parameter warning"', function(done) {});
                    });
                });
            }); //finish sim

            context('list', function() {
                context('No parameters specified', function() {
                    it.skip('Show "list" command usage', function(done) {});
                });
                context('Parameters specified', function() {
                    context('devices', function() {
                        it.skip('display available devices', function(done) {});
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
            context('No device selected', function() {
                context('set', function() {
                    it.skip('should show a "Select a Device" warning', function(done) {});
                }); //set

                context('reboot', function() {
                    it.skip('should show a "Select a Device" warning', function(done) {});
                }); //reboot

                context('search', function() {
                    it.skip('should show a "Select a Device" warning', function(done) {});
                }); //search

                context('install', function() {
                    it.skip('should show a "Select a Device" warning', function(done) {});
                }); //install

                context('config', function() {
                    it.skip('should show a "Select a Device" warning', function(done) {});
                }); //config

                context('uninstall', function() {
                    it.skip('should show a "Select a Device" warning', function(done) {});
                }); //uninstall

                context('update', function() {
                    it.skip('should show a "Select a Device" warning', function(done) {});
                }); //update

                context('start', function() {
                    it.skip('should show a "Select a Device" warning', function(done) {});
                }); //start

                context('stop', function() {
                    it.skip('should show a "Select a Device" warning', function(done) {});
                }); //stop

                context('restart', function() {
                    it.skip('should show a "Select a Device" warning', function(done) {});
                }); //restart

                context('create', function() {
                    it.skip('should show a "Select a Device" warning', function(done) {});
                }); //create

                context('deploy', function() {
                    it.skip('should show a "Select a Device" warning', function(done) {});
                }); //deploy

                context('trigger', function() {
                    it.skip('should show a "Select a Device" warning', function(done) {});
                }); //trigger

                context('log', function() {
                    it.skip('should show a "Select a Device" warning', function(done) {});
                }); //log
            });

            context('Device selected', function() {
                context('set', function() {
                    context('No parameters specified', function() {
                        it.skip('should command "set" usage', function(done) {});
                    });
                    context('Parameters specified', function() {
                        context('env', function() {
                            context('No parameters specified', function() {
                                it.skip('should show command "set env" usage', function(done) {});
                            });
                            context('Parameters specified', function() {
                                context('sandbox', function() {
                                    it.skip('should set the device environment to sandbox', function(done) {});
                                });
                                context('production', function() {
                                    it.skip('should set the device environment to production', function(done) {});
                                });
                            });
                        });
                        context('config', function() {
                            context('No parameters specified', function() {
                                it.skip('should show command "set config" usage', function(done) {});
                            });
                            context('Parameters specified', function() {
                                context('Missing app name', function() {
                                    it.skip('should show command "set config" usage', function(done) {});
                                });
                                context('Invalid app name', function() {
                                    it.skip('should show an "invalid app" warning', function(done) {});
                                });
                                context('Valid app name', function() {
                                    context('Missing proper key value setting', function() {
                                        it.skip('should show command "set config" usage', function(done) {});
                                    });
                                    context('Valid key value setting', function() {
                                        it.skip('should set the configuration value for the specified key', function(done) {});
                                    });
                                });
                            });
                        }); //finish set config
                    });
                }); //finish  set

                context('reboot', function() {
                    context('Unable to reach device', function() {
                        it.skip('should return an error', function(done) {});
                    });
                    context('Device is alive', function() {
                        it.skip('should reboot the current device', function(done) {});
                    });
                }); //finish reboot

                context('search', function() {
                    context('No parameters specified', function() {
                        it.skip('should show command "search" usage', function(done) {});
                    });

                    context('Parameters specified', function() {
                        context('search term has less than 2 characters', function() {
                            it.skip('should show a search term warning', function(done) {});
                        });

                        context('search term has more than 2 characters', function() {
                            it.skip('should list the results of an app search', function(done) {});
                        });
                    });

                }); //finish search

                context('install', function() {
                    context('No parameters specified', function() {
                        it.skip('should show command "search" usage', function(done) {});
                    });

                    context('Parameters specified', function() {
                        context('Invalid app/sensor name', function() {
                            it.skip('should show invalid "app/sensor" warning', function(done) {});
                        });

                        context('Valid app/sensor name', function() {
                            context('app is already installed',function(){
                                 it.skip('should show warning app already installed', function(done) {});
                            });
                            context('app isn\'t already installed',function(){
                                 it.skip('should install the app or sensor specified to active MatrixOS device', function(done) {});
                            });
                        });
                    });
                }); //finish install

                context('config', function() {
                    context('No parameters specified', function() {
                        it.skip('should show device configurations', function(done) {});
                    });

                    context('Parameters specified', function() {
                        context('specified app doesn\'t exist', function() {
                            it.skip('should show an "specified app doesn\'t exist" warning', function(done) {});
                        });
                        context('specified app exists', function() {
                            context('app', function() {
                                it.skip('should show application configurations', function(done) {});
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
                }); //finish config

                context('uninstall', function() {
                    context('No parameters specified', function() {
                        it.skip('should show command "uninstall" usage', function(done) {});
                    });

                    context('Parameters specified', function() {
                        context('specified app doesn\'t exist', function() {
                            it.skip('should show a "specified app doesn\'t exist" warning', function(done) {});
                        });

                        context('specified app exists', function() {
                            context('device is offline', function() {
                                it.skip('should show a "device is offline" warning', function(done) {});
                            });

                            context('device is online', function() {
                                it.skip('should uninstall the specified app', function(done) {});
                            });
                        });
                    });
                }); //finish uninstall

                context('update', function() {

                    context('No parameters specified', function() {
                        it.skip('should show command "update" usage', function(done) {});
                    });

                    context('Parameters specified', function() {
                        context('app', function() {
                            context('device doesn\'t have the app installed', function() {
                                it.skip('should show a "device doesn\'t have the app installed"', function(done) {});
                            });

                            context('device has the app installed', function() {
                                it.skip('should update the application to its latest version', function(done) {});
                            });

                            context('app version', function() {
                                context('version doesn\'t exist', function() {
                                    it.skip('should show a version doesn\'t exist warning', function(done) {});
                                });

                                context('version exists', function() {
                                    it.skip('should update to that version', function(done) {});
                                });
                            });

                            context('unknown parameter', function() {
                                it.skip('should show a "parameter doesn\'t exist "', function(done) {});
                            });
                        });
                    }); //finish update


                    context('start', function() {

                        context('No parameters specified', function() {
                            it.skip('should show command "start" usage', function(done) {});
                        });

                        context(' parameters specified', function() {
                            context('start', function() {
                                it.skip('Starts an app running on the active MatrixOS', function(done) {});
                            });
                            context('unknown parameter', function() {
                                it.skip('should show an "parameter doesn\'t exist', function(done) {});
                            });

                        });
                    }); //finish start




                    context('stop', function() {

                        context('No parameters specified', function() {
                            it.skip('should show command "stop" usage', function(done) {});
                        });

                        context(' parameters specified', function() {
                            context('unknown parameter', function() {
                                it.skip('should show an "parameter doesn\'t exist', function(done) {});
                            });
                            context('stop', function() {
                                it.skip('Stops an app running on the active MatrixOS', function(done) {});
                            });
                        });
                    }); //stop


                    context('restart', function() {

                        context('No parameters specified', function() {
                            it.skip('should show command "restart" usage', function(done) {});
                        });

                        context(' parameters specified', function() {
                            context('unknown parameter', function() {
                                it.skip('should show an "parameter doesn\'t exist', function(done) {});
                            });

                            context('restart', function() {
                                it.skip('Restarts an app running on the MatrixOS', function(done) {});

                            });
                        });
                    }); //stop



                    context('create', function() {

                        context('No parameters specified', function() {
                            it.skip('should show commands "create" usage', function(done) {});
                        });

                        context('parameter specified', function() {
                            context('unknown parameter', function() {
                                it.skip('should show an "parameter doesn\'t exist', function(done) {});
                            });
                        });
                        context('create', function() {
                            context('No name specified to device create', function() {
                                it.skip('should show an message "specified an name to device"', function(done) {});
                            });
                            context('specified to name device create', function() {
                                it.skip('Creates a new scaffolding for a MatrixOS Application', function(done) {});
                            });
                        });
                    });
                }); //finish create




                context('deploy', function() {
                    context('No parameters specified', function() {
                        it.skip('should show commands "deploy" usage', function(done) {});
                    });

                    context('parameters specified', function() {
                        context('unknown parameter', function() {
                            it.skip('should show an "parameter doesn\'t exist', function(done) {});
                        });
                        context('deploy', function() {
                            it.skip('Deploys an app to the active MatrixOS', function(done) {});
                        });

                    });
                }); //finish deploy




                context('trigger', function() {
                    context('No parameters specified', function() {
                        it.skip('should show commands "trigger" usage', function(done) {});
                    });
                    context('parameters specified', function() {
                        context('unknown parameter specified  ', function() {
                            it.skip('should show an "parameter doesn\'t exist', function(done) {});
                        });
                        context(' parameter specified is trigger ', function() {
                            it.skip('Runs a trigger test', function(done) {});
                        });

                    });

                }); //trigger


                context('log', function() {
                    context('No parameters specified', function() {
                        it.skip('should show commands "log" usage', function(done) {});
                    });
                    context(' parameters specified', function() {
                        context('no device and app assigned', function() {
                            it.skip('should show  "Select on device o app " ', function(done) {});
                        });
                        context(' device and app assigned', function() {

                            context('unknown parameter specified', function() {
                                it.skip('should show commands "log" usage', function(done) {});
                            });
                            context('log', function() {
                                it.skip('Logs output from selected MatrixOS and applications', function(done) {});
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