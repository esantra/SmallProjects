//coded as part of this learning tutorial: https://appendto.com/2016/11/comparing-angular-1-angular-2-build-a-pomodoro-timer/?nabw=1&utm_referrer=https%3A%2F%2Fwww.google.com%2F
var app = angular.module("pomodoroApp", []);

app.component('pomodoroComp', {
    bindings: {},
    templateUrl: '/componentGrid.html',
    controller: ['$interval', function(interval) {

        var self = this;
        self.started = false;
        self.clickClock = false;
        self.clockLabel = 'Session';

        self.minutes = 25;
        self.seconds = 0;
        self.bMinutes = 5;
        self.bSeconds = 0;
        self.fillerIncrement = 200 / (self.minutes * 60);
        self.fillerHeight = 0;
        self.pomo = true;

        self.resetVariables = function(mins, secs, started) {
            console.log('reset vars');
            self.pomo = true;
            self.minutes = mins;
            self.seconds = secs;
            self.started = started;

            self.fillerIncrement = 200 / (self.minutes * 60);
            self.fillerHeight = 0;
        };


        self.resetBVariables = function(mins, secs, started) {
            console.log('reset b vars');
            self.pomo = false;
            self.bMinutes = mins;
            console.log('self.bMinutes ' + self.bMinutes);
            self.bSeconds = secs;
            self.started = started;

            self.fillerIncrement = 200 / (self.bMinutes * 60);
            self.fillerHeight = 0;
        };

        self.startWork = function() {
            console.log('start work');
            console.log(self.clickClock);
            //start the clock
            if (self.clockLabel === 'Session') {
                self.resetVariables(self.minutes, self.seconds, true);
                self.clickClock = true;
                return;
            }

            if (self.clockLabel === 'Break') {
                self.resetBVariables(self.bMinutes, self.bSeconds, true);
                self.clickClock = true;
                return;
            }
        };

        self.addOne = function() {
            self.minutes = self.minutes + 1;
        };

        self.minusOne = function() {
            self.minutes = self.minutes - 1;
            if (self.minutes < 0) {
                self.minutes = 0;
            }
        };
        self.addBOne = function() {
            self.bMinutes = self.bMinutes + 1;
        };

        self.minusBOne = function() {
            self.bMinutes = self.bMinutes - 1;
            if (self.bMinutes < 0) {
                self.bMinutes = 0;
            }
        };

        self.stopTimer = function() {
            if (self.clockLabel === 'Session') {
                self.resetVariables(self.minutes, self.seconds, false);
            } else {
                self.resetVariables(self.bMinutes, self.bSeconds, false);
            }
        };

        self.timerComplete = function() {
            console.log('timer complete');
            self.started = true;
            if (self.clockLabel === 'Break') {
                self.clockLabel = 'Session';
                self.resetVariables(self.minutes, self.seconds, true);
            } else if (self.clockLabel === 'Session') {
                self.clockLabel = 'Break';
                self.resetBVariables(self.bMinutes, self.bSeconds, true);
            }
        };

        self.resetTimer = function() {
            self.started = true;
            self.clockLabel = 'Session';
            self.resetVariables(25, 0, true);
        };

        self.intervalCallback = function() {
            if (!self.started) return false;
            if (self.clockLabel === 'Session') {
                console.log('countdown reg vars');
                if (self.seconds === 0) {
                    if (self.minutes === 0) {
                        self.timerComplete();
                        return;
                    }
                    self.seconds = 59;
                    self.minutes--;
                } else {
                    self.seconds--;
                }
            } else if (self.clockLabel === 'Break') {
                console.log('countdown b vars');
                if (self.bSeconds === 0) {
                    if (self.bMinutes === 0) {
                        self.timerComplete();
                        return;
                    }
                    self.bSeconds = 59;
                    self.bMinutes--;
                } else {
                    self.bSeconds--;
                }
            }

            self.fillerHeight += self.fillerIncrement;
        };

        self.toDoubleDigit = function(num) {
            return num < 10 ? '0' + parseInt(num, 10) : num;
        };

        self.$onInit = function() {
            self.interval = interval(self.intervalCallback, 1000);

        };

    }]
});
