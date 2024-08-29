export default class Settings {
    constructor() {
        this.options = new Map ([
            ['theme', ['dark', 'light', 'gray']],
            ['music', ['trance', 'pop', 'rock', 'chillout', 'off']],
            ['difficulty', ['easy', 'normal', 'hard', 'nightmare']],
        ]);
    };

    
    selectSettings(setOption, setMode) {
        const keys = Array.from(this.options.keys())
        const values = Array.from(this.options.values())

        for(let i = 0; i < keys.length; i++) {
            if(keys[i] === setOption) {
                if(values[i].includes(setMode)) {
                    values[i].splice(setMode);
                    values[i].unshift(setMode)
                } else {
                    throw new Error (`Заданной настройки ${setMode} не существует! Заданы базовые значения!`)
                };
            };

            if(!keys.includes(setOption)) {
                throw new Error (`Заданного параметра ${setOption} не существует! Заданы базовые значения!`)
            };
        };
    };

    getSettings() {
        for(let option of this.options) {
            return `Настойка: ${option[0]}, выбранный режим: ${option[1][0]}`
        };
    };
};

