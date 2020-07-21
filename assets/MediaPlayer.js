function  MediaPlayer (config) {
    this.media = config.video;
    this.plugins = config.plugins || [];
    this.initPlugins()
}

MediaPlayer.prototype.initPlugins = function () {
    this.plugins.forEach(plugin => {
        plugin.run(this)
    });
}

MediaPlayer.prototype.play = function () {
    this.media.play();
}

MediaPlayer.prototype.play = function () {
    this.media.play();
}

MediaPlayer.prototype.pause = function () {
    this.media.pause();
}

MediaPlayer.prototype.mute = function () {
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function () {
    this.media.muted = false;
}

MediaPlayer.prototype.togglePlay = function () {
    if(this.media.paused){
        this.play()
    }else{
        this.pause()
    }
}

MediaPlayer.prototype.toggleMute = function () {
    if(this.media.muted){
        this.unmute()
    }else{
        this.mute()
    }
}

export default MediaPlayer