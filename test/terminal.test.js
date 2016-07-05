//var run = require('child_process').spawn;
//var exec = require('child_process').exec;

describe('Matrix CLI commands', function () {
    context('Not logged in', function () {
        it.skip('should show a log in warning', function (done) { });
        context('login', function () {
            it.skip('should request user credentials...', function (done) { }); //TODO Complete flow
        });
        context('logout', function () {
            it.skip('should show a log in warning', function (done) { });
        }); //Logout

        context('use', function () {
            it.skip('should show a log in warning', function (done) { });
        });//use

        context('sim', function () {
            it.skip('should show a log in warning', function (done) { });
        });//sim

        context('list', function () {
            it.skip('should show a log in warning', function (done) { });
        });//list

        context('set', function () {
            it.skip('should show a log in warning', function (done) { });
        });//set

        context('reboot', function () {
            it.skip('should show a log in warning', function (done) { });
        });//reboot

        context('search', function () {
            it.skip('should show a log in warning', function (done) { });
        });//search

        context('install', function () {
            it.skip('should show a log in warning', function (done) { });
        });//install

        context('config', function () {
            it.skip('should show a log in warning', function (done) { });
        });//config

        context('uninstall', function () {
            it.skip('should show a log in warning', function (done) { });
        });//uninstall

        context('update', function () {
            it.skip('should show a log in warning', function (done) { });
        });//update

        context('start', function () {
            it.skip('should show a log in warning', function (done) { });
        });//start

        context('stop', function () {
            it.skip('should show a log in warning', function (done) { });
        });//stop

        context('restart', function () {
            it.skip('should show a log in warning', function (done) { });
        });//restart

        context('create', function () {
            it.skip('should show a log in warning', function (done) { });
        });//create

        context('deploy', function () {
            it.skip('should show a log in warning', function (done) { });
        });//deploy

        context('trigger', function () {
            it.skip('should show a log in warning', function (done) { });
        });//trigger

        context('log', function () {
            it.skip('should show a log in warning', function (done) { });
        });//log
    });

    context('Logged in', function () {
        //NO DEVICE REQUIRED
        context('No parameters specified', function () {
            it.skip('should show the matrix command usage', function (done) { });
        });
        context('Parameters specified', function () {
            context('login', function () {
                it.skip('should show an "already logged in" warning', function (done) { });
            }); //login

            context('logout', function () {
                it.skip('should log out', function (done) { });
            }); //Logout

            context('use', function () {
                context('No parameters specified', function () {
                    it.skip('Show "use" command usage', function (done) { });
                });
                context('Parameters specified', function () {
                    context('Specified device exists', function () {
                        it.skip('Show set device as current device', function (done) { });
                    });
                    context('Specified device doesn\'t exist', function () {
                        it.skip('should show an "invalid device" warning', function (done) { });
                    });
                    context('Current user doesn\'t have permission to use specified device', function () {
                        it.skip('should show an "invalid device" warning', function (done) { });
                    });
                });
            });//use

            context('sim', function () {
                context('No parameters specified', function () {
                    it.skip('Show "sim" command usage', function (done) { });
                });
                context('Parameters specified', function () {
                    context('init', function () {
                        it.skip('should request simulator settings', function (done) { });
                    });

                    context('Simulator hasn\'t been initialized', function () {
                        context('restore', function () {
                            it.skip('should show an "initialize simulator" warning', function (done) { });
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
            });//sim

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
            });//list

            //DEVICE REQUIRED
            context('No device selected', function () {
                context('set', function () {
                    it.skip('should show a "Select a Device" warning', function (done) { });
                });//set

                context('reboot', function () {
                    it.skip('should show a "Select a Device" warning', function (done) { });
                });//reboot

                context('search', function () {
                    it.skip('should show a "Select a Device" warning', function (done) { });
                });//search

                context('install', function () {
                    it.skip('should show a "Select a Device" warning', function (done) { });
                });//install

                context('config', function () {
                    it.skip('should show a "Select a Device" warning', function (done) { });
                });//config

                context('uninstall', function () {
                    it.skip('should show a "Select a Device" warning', function (done) { });
                });//uninstall

                context('update', function () {
                    it.skip('should show a "Select a Device" warning', function (done) { });
                });//update

                context('start', function () {
                    it.skip('should show a "Select a Device" warning', function (done) { });
                });//start

                context('stop', function () {
                    it.skip('should show a "Select a Device" warning', function (done) { });
                });//stop

                context('restart', function () {
                    it.skip('should show a "Select a Device" warning', function (done) { });
                });//restart

                context('create', function () {
                    it.skip('should show a "Select a Device" warning', function (done) { });
                });//create

                context('deploy', function () {
                    it.skip('should show a "Select a Device" warning', function (done) { });
                });//deploy

                context('trigger', function () {
                    it.skip('should show a "Select a Device" warning', function (done) { });
                });//trigger

                context('log', function () {
                    it.skip('should show a "Select a Device" warning', function (done) { });
                });//log
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
                        });  //finish set config
                    });
                });//finish  set

                context('reboot', function () {
                    context('Unable to reach device', function () {
                        it.skip('should return an error', function (done) { });
                    });
                    context('Device is alive', function () {
                        it.skip('should reboot the current device', function (done) { });
                    });
                });//finish reboot

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

                });//finish search

                context('install', function () {
                    context('No parameters specified', function () {
                        it.skip('should show command "search" usage', function (done) { });
                    });

                    context('Parameters specified', function () {
                        context('Invalid app/sensor name', function () {
                            it.skip('should show invalid "app/sensor" warning', function (done) { });
                        });

                        context('Valid app/sensor name', function () {
                            it.skip('should install the app or sensor specified to active MatrixOS device', function (done) { });
                        });
                    });
                });//finish install

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
                });//finish config

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
                });//finish uninstall

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
                    });//finish update


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
                    });//finish start




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
                    });//stop


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
                    });//stop



                    context('create', function () {

                        context('No parameters specified', function () {
                            it.skip('should show commands "create" usage', function (done) { });
                        });

                        context('parameter specified', function () {
                            context('unknown parameter', function () {
                                it.skip('should show an "parameter doesn\'t exist',function (done) { });
                            });
                        });
                            context('create', function () {
                                context('No name specified to device create', function () {
                                    it.skip('should show an message "specified an name to device"',function (done) { });
                                });
                                context('specified to name device create', function () {
                                    it.skip('Creates a new scaffolding for a MatrixOS Application',function (done) { });
                                });
                            });
                        });
                    });//finish create




                    context('deploy', function () {
                        context('No parameters specified', function () {
                            it.skip('should show commands "deploy" usage', function (done) { });
                        });

                        context('parameters specified', function () {
                            context('unknown parameter',function () {
                                it.skip('should show an "parameter doesn\'t exist',function (done) { });
                            });
                            context('deploy',function () {
                                it.skip('Deploys an app to the active MatrixOS',function (done) { });
                            });

                        });
                    });//finish deploy






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

                    });//trigger


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
                    });//finish log
                });
            });
        });
    });
