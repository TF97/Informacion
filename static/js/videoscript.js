document.addEventListener("DOMContentLoaded", function() {
    const videoWrappers = document.querySelectorAll(".video-wrapper");

    videoWrappers.forEach(wrapper => {
        const video = wrapper.querySelector("video");
        const overlay = wrapper.querySelector(".overlay");

        video.addEventListener("play", function() {
            overlay.style.display = "none";
        });

        video.addEventListener("click", function() {
            if (this.paused) {
                this.play();
            } else {
                this.pause();
            }
        });
    });
});
