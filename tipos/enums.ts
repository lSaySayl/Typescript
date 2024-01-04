(()=> {

    enum AudioLevel {
        min = 2,
        medium,
        max = 10
    }

    console.log(AudioLevel)

    const currentAudio = AudioLevel.medium;

    console.log({currentAudio})

})()