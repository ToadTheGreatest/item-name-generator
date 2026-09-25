<!DOCTYPE html>
<html>
    <head>
        <title>Item Name Generator</title>
        <link rel="stylesheet" href="data/styles.css">
    </head>
    <body>
        <details>
            <summary>Weapon Name</summary>
            <div>
                <input type="checkbox" id="wp-modifier" checked>
                <label for="wp-modifier">Modifier</label><br>
                <input type="checkbox" id="wp-material" checked>
                <label for="wp-modifier">Material</label><br>
                <input type="checkbox" id="wp-type" checked disabled>
                <label for="wp-type">Type</label><br>
                <input type="checkbox" id="wp-blessing" checked>
                <label for="wp-blessing">Blessing</label><br>
                <button onclick="generate('weapon');">Generate!</button><br>
                <span class="output" id="wp-output"></span>
            </div>
        </details>
        <script src="data/script.js"></script>
    </body>
</html>