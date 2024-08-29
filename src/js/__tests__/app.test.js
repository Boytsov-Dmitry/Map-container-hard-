import Settings from "../app";

const personalSettings = new Settings();

test('initialization settings with basic param', () => {
    expect(personalSettings.options.size).toEqual(3);
});

test('changing settings to personal (no errors in option)', () => {
    personalSettings.selectSettings('theme', 'light')

    const ideal = "Настойка: theme, выбранный режим: light";

    expect(personalSettings.getSettings()).toEqual(ideal);
});

test('changing settings to personal (error in option)', () => {
    expect(() => personalSettings.selectSettings('aaaaaa', 'light')).toThrow();
});

test('changing settings to personal (error in mode)', () => {
    expect(() => personalSettings.selectSettings('theme', 'aaaa')).toThrow();
});