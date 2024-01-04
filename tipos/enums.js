"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 2] = "min";
        AudioLevel[AudioLevel["medium"] = 3] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    console.log(AudioLevel);
    const currentAudio = AudioLevel.medium;
    console.log({ currentAudio });
})();
