"use strict"; {
    angular.module('app')
        .controller('watchListController', function (movieService) {
            const $ctrl = this;

            $ctrl.watchListArray = movieService.list;
            $ctrl.remove = function(index) {
                $ctrl.watchListArray.splice(index, 1);
            }


        });
    }