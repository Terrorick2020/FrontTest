<template>
    <div class="wrapper">
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
$main-bg-color: rgb(20, 20, 20);
$main-select-bg-color: rgb(62, 170, 107);
$main-words-color: white;

::selection {
    background-color: $main-select-bg-color;
    color: $main-words-color;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: rgb(0,0,0) transparent;
    cursor: url('./asset/cursor.svg'), auto !important;
}

body {
    font-family: 'YanoneKaffeesatz-Regular';
    background: $main-bg-color;
    font-size: 1em;
}

.panel {
    border: 2px solid #4D4D4D;
    border-radius: 12px;
    background: #262626;
    height: 580px;
}

button {
    cursor: pointer;
}
</style>