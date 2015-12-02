/**
 * Created by t_tappa on 11/25/2015.
 */
var app = angular.module("myApp", []);

app.controller("HelloController", function($scope) {

    $scope.team1 = 0;
    $scope.team2 = 0;
    $scope.selectedImage = "";
    $scope.tileIsSelected = false;
    $scope.readyToAssignPoints = false;
    $scope.pointsToAssign = 0;
    $scope.answered = 0;
    $scope.done = false;
    $scope.winning = 0;

    $scope.selectTile = function(data) {
        if (!data.selected && !$scope.tileIsSelected && !$scope.readyToAssignPoints) {
            $scope.selectedImage = data.image;
            data.selected = true;
            $scope.tileIsSelected = true;
        }
        else if (data.selected && !data.answered && $scope.tileIsSelected && !$scope.readyToAssignPoints){
            data.answered = true;
            $scope.readyToAssignPoints = true;
            $scope.pointsToAssign = data.price;
            $scope.tileIsSelected = false;
        }
    };

    $scope.assignPoints = function(team) {
        if (team == 1) {
            $scope.team1 += $scope.pointsToAssign;
        }
        else {
            $scope.team2 += $scope.pointsToAssign;
        }
        $scope.readyToAssignPoints = false;
        $scope.answered++;
        if ($scope.answered >= 15) {
            $scope.done = true;
            $scope.winning = $scope.team1 > $scope.team2 ? 1 : 2;
            if ($scope.team1 == $scope.team2)
            {
                $scope.winning = 3;
            }
        }
    };
    $scope.first = [
        {
            "answer"    : "la estudiante",
            "price"     : 200,
            "image"     : "clasePics/laestudiante.jpg",
            "selected"  : false,
            "answered"  : false
        },
        {
            "answer"    : "alto",
            "price"     : 200,
            "image"     : "ajetivosPics/alto.jpg",
            "selected"  : false,
            "answered"  : false
        },
        {
            "answer"    : "beber",
            "price"     : 200,
            "image"     : "verbosPics/beberdrink.jpg",
            "selected"  : false,
            "answered"  : false
        },
        {
            "answer"    : "la profesora",
            "price"     : 400,
            "image"     : "clasePics/laprofesora.jpg",
            "selected"  : false,
            "answered"  : false
        },
        {
            "answer"    : "delgada",
            "price"     : 400,
            "image"     : "ajetivosPics/delgada.jpg",
            "selected"  : false,
            "answered"  : false
        }
    ];

    $scope.second = [
        {
            "answer"    : "comer",
            "price"     : 400,
            "image"     : "verbosPics/comer.jpg",
            "selected"  : false,
            "answered"  : false
        },
        {
            "answer"    : "el borrador",
            "price"     : 600,
            "image"     : "clasePics/elborrador.png",
            "selected"  : false,
            "answered"  : false
        },
        {
            "answer"    : "pelirrojo",
            "price"     : 600,
            "image"     : "ajetivosPics/pelirrojo.jpg",
            "selected"  : false,
            "answered"  : false
        },
        {
            "answer"    : "correr",
            "price"     : 600,
            "image"     : "verbosPics/correrrun-05.jpg",
            "selected"  : false,
            "answered"  : false
        },
        {
            "answer"    : "la pizarra",
            "price"     : 800,
            "image"     : "clasePics/lapizarra.png",
            "selected"  : false,
            "answered"  : false
        }
    ];

    $scope.third = [
        {
            "answer"    : "trabajador",
            "price"     : 800,
            "image"     : "ajetivosPics/trabajador.gif",
            "selected"  : false,
            "answered"  : false
        },
        {
            "answer"    : "descansar",
            "price"     : 800,
            "image"     : "verbosPics/descansar.jpg",
            "selected"  : false,
            "answered"  : false
        },
        {
            "answer"    : "la tiza",
            "price"     : 1000,
            "image"     : "clasePics/latiza.png",
            "selected"  : false,
            "answered"  : false
        },
        {
            "answer"    : "viejo",
            "price"     : 1000,
            "image"     : "ajetivosPics/viejo.jpg",
            "selected"  : false,
            "answered"  : false
        },
        {
            "answer"    : "jugar",
            "price"     : 1000,
            "image"     : "verbosPics/jugar.jpg",
            "selected"  : false,
            "answered"  : false
        }
    ];

    $scope.restart = function() {

        $scope.team1 = 0;
        $scope.team2 = 0;
        $scope.selectedImage = " ";
        $scope.tileIsSelected = false;
        $scope.readyToAssignPoints = false;
        $scope.pointsToAssign = 0;
        $scope.answered = 0;
        $scope.done = false;
        $scope.winning = 0;

        $scope.first = [
            {
                "answer"    : "la estudiante",
                "price"     : 200,
                "image"     : "clasePics/laestudiante.jpg",
                "selected"  : false,
                "answered"  : false
            },
            {
                "answer"    : "alto",
                "price"     : 200,
                "image"     : "ajetivosPics/alto.jpg",
                "selected"  : false,
                "answered"  : false
            },
            {
                "answer"    : "beber",
                "price"     : 200,
                "image"     : "verbosPics/beberdrink.jpg",
                "selected"  : false,
                "answered"  : false
            },
            {
                "answer"    : "la profesora",
                "price"     : 400,
                "image"     : "clasePics/laprofesora.jpg",
                "selected"  : false,
                "answered"  : false
            },
            {
                "answer"    : "delgada",
                "price"     : 400,
                "image"     : "ajetivosPics/delgada.jpg",
                "selected"  : false,
                "answered"  : false
            }
        ];

        $scope.second = [
            {
                "answer"    : "comer",
                "price"     : 400,
                "image"     : "verbosPics/comer.jpg",
                "selected"  : false,
                "answered"  : false
            },
            {
                "answer"    : "el borrador",
                "price"     : 600,
                "image"     : "clasePics/elborrador.png",
                "selected"  : false,
                "answered"  : false
            },
            {
                "answer"    : "pelirrojo",
                "price"     : 600,
                "image"     : "ajetivosPics/pelirrojo.jpg",
                "selected"  : false,
                "answered"  : false
            },
            {
                "answer"    : "correr",
                "price"     : 600,
                "image"     : "verbosPics/correrrun-05.jpg",
                "selected"  : false,
                "answered"  : false
            },
            {
                "answer"    : "la pizarra",
                "price"     : 800,
                "image"     : "clasePics/lapizarra.png",
                "selected"  : false,
                "answered"  : false
            }
        ];

        $scope.third = [
            {
                "answer"    : "trabajador",
                "price"     : 800,
                "image"     : "ajetivosPics/trabajador.gif",
                "selected"  : false,
                "answered"  : false
            },
            {
                "answer"    : "descansar",
                "price"     : 800,
                "image"     : "verbosPics/descansar.jpg",
                "selected"  : false,
                "answered"  : false
            },
            {
                "answer"    : "la tiza",
                "price"     : 1000,
                "image"     : "clasePics/latiza.png",
                "selected"  : false,
                "answered"  : false
            },
            {
                "answer"    : "viejo",
                "price"     : 1000,
                "image"     : "ajetivosPics/viejo.jpg",
                "selected"  : false,
                "answered"  : false
            },
            {
                "answer"    : "jugar",
                "price"     : 1000,
                "image"     : "verbosPics/jugar.jpg",
                "selected"  : false,
                "answered"  : false
            }
        ];
    };

});