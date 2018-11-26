'use strict';

angular.module('VideoCntrl', [])
.controller('VideoController', function($scope, $http){
    $http.get("model/data.json")
    .then(function(response) {
     $scope.jsonData = response.data.pageTextData
    });
    var videoPlayer = $('#videoPlayer');
    //alert(videoPlayer);
    $('.btnPlay').click(function() {
        if(videoPlayer[0].paused) {
            videoPlayer[0].play();
            $('.glyphicon-play').attr('class', 'glyphicon glyphicon-pause');
        }
        else {
            videoPlayer[0].pause();
            $('.glyphicon-pause').attr('class', 'glyphicon glyphicon-play');
        }
        return false;
    })
    videoPlayer.on('timeupdate', function() {
        $('.current').text(Math.round(videoPlayer[0].currentTime));
    });
    videoPlayer.on('loadedmetadata', function() {
        $('.duration').text(Math.round(videoPlayer[0].duration));
    });
    $('.btnMute').click(function() {
        if (videoPlayer[0].muted == false) {
            videoPlayer[0].muted = true;
            $('.glyphicon-volume-up').attr('class', 'glyphicon glyphicon-volume-off');
           // alert("Mute button clicked");
        } else {
            videoPlayer[0].muted = false;
            $('.glyphicon-volume-off').attr('class', 'glyphicon glyphicon-volume-up');
        }
    });
    $('.btnFullscreen').on('click', function() {
        videoPlayer[0].webkitEnterFullscreen();
        videoPlayer[0].mozRequestFullScreen();
        return false;
    });
});

