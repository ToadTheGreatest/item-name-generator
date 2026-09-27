const lists = {
    "metals": ["iron", "copper", "brass", "gold", "aluminum", "titanium", "tungsten", "steel",],
    "weapon": {
        "modifier": ["rusty", "great", "polished", "upgraded", "weathered", "decayed"],
        "material": ["iron", "copper", "brass", "gold", "aluminum", "titanium", "tungsten", "steel", "wooden"],
        "type": ["sword", "dagger", "claymore", "spear", "bow", "club", "bat"],
        "blessing": ["+1", "+2", "+3", "+4", "+5", "of the hero", "of life", "of the great", "of the lord"],
    },
    "item": {
        "size": ["huge", "giant", "big", "medium", "small", "tiny", "microscopic"],
        "modifier": ["rusty", "polished",],
        "type": ["charge", "crystalized charge", "core", "crystalized core"],
    }
}
function choice(list) {
    return list[Math.floor(Math.random() * list.length)];
}
function gugenerateWeapon() {
    // oui oui~~
    // hehe boii
    const checkboxes = {
        "modifier": document.getElementById("gu-wp-modifier").checked,
        "material": document.getElementById("gu-wp-material").checked,
        "type": document.getElementById("gu-wp-type").checked,
        "blessing": document.getElementById("gu-wp-blessing").checked,
    };
    var name = [];
    if (checkboxes.modifier) {
        name.push(choice(lists.weapon.modifier));
    }
    if (checkboxes.material) {
        name.push(choice(lists.weapon.material));
    }
    if (checkboxes.type) {
        name.push(choice(lists.weapon.type));
    }
    if (checkboxes.blessing) {
        name.push(choice(lists.weapon.blessing));
    }
    var output = name.join(" ");
    document.getElementById("gu-wp-output").textContent = output;
}
function gugenerateItem() {
    // oui oui~~
    // hehe boii
    const checkboxes = {
        "size": document.getElementById("gu-it-size").checked,
        "modifier": document.getElementById("gu-it-modifier").checked,
        "type": document.getElementById("gu-it-type").checked,
    };
    var name = [];
    if (checkboxes.size) {
        name.push(choice(lists.item.size));
    }
    if (checkboxes.modifier) {
        name.push(choice(lists.item.modifier));
    }
    if (checkboxes.type) {
        name.push(choice(lists.item.type));
    }
    var output = name.join(" ");
    document.getElementById("gu-it-output").textContent = output;
}
function gugenerate(type) {
    if (type == "weapon") {
        gugenerateWeapon()
    }
    if (type == "item") {
        gugenerateItem()
    }
}
function tracery() {
    const input = document.getElementById("t-inputjson");
    const output = document.getElementById("t-output");
    if (!input.value) {
        console.log("No input!")
        return;
    }
    const injson = JSON.parse(input.value);
    if (!injson.origin) {
        console.log("No origin!")
        return;
    }
    const result = traceryRunner("#origin#");
    output.textContent = result;
}
function traceryRunner(grammar, text) {
    const modifiers = {
        capitalize: s => s.charAt(0).toUpperCase + s.slice(1),
        s: s => s.endsWith('s') ? s : s + "s",
        a: s => ['a', 'e', 'i', 'o', 'u'].includes(s[0].toLowerCase()) ? `an ${s}` : `a ${s}`
    };
    if (grammar[text]) {
        const randomPick = choice(grammar[text]);
        return traceryRunner(grammar, randomPick);
    }
    return text.replace(/#([^#]+)#/g, (match, token) => {
        const [symbol, ...mods] = token.split(".");
        if (!grammer[symbol]) return match;
        let result = traceryRunner(grammer, symbol);
        mods.forEach(m => { if (modifiers[m]) result = modifiers[m](result); });
        return result;
    })
}
document.getElementById("t-inputjson").addEventListener("input", tracery())