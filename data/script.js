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