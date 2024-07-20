<template>
    <div class="panel__interface panel">
        <div class="interface__img">
            <img src="../../asset/stalker.jpg" alt="">
        </div>
        <h2 class="interface__title">Лучшая в мире игра!</h2>
        <p class="interface__description">Шутер — это жанр компьютерных игр, в котором основной акцент делается на боевых действиях, часто с использованием огнестрельного оружия. Игроки принимают роль бойца или группы бойцов, которые должны преодолеть различные препятствия и противников, используя доступное им оружие и стратегические навыки.</p>
    </div>
</template>

<script></script>

<style lang="scss" scoped>
.panel__interface {
    width: 34%;
    padding: 30px;

    @media ( max-width: 1024px ) and (min-width: 850px) {
        width: 45%;
        padding: 25px;
    }

    @media ( max-width: 849px ) {
        width: 100%;
        padding: 20px;
    }

    .interface__img {
        width: 100%;
        height: 260px;
        border: 1px solid white;
        overflow: hidden;
        border-radius: 12px;

        img {
            width: 100%;
            size: cover;
        }
    }

    .interface__title {
        text-align: center;
        margin-top: 20px;
    }

    .interface__description {
        margin-top: 30px;
        line-height: 22px;
    }
}
</style>