<template>
    <!-- Outra sintaxe que funciona: 
    <span class="tag" :class="{ ativa: ativa }"> -->
    <!-- Passando uma lista de classes, uma delas sendo o valor da props -->
    <span :class="['tag', { ativa }]">
        {{ texto }}
    </span>
</template>

<script lang="ts">
    export default {
        props: {
            texto: {
                type: String,
                required: true
            },
            ativa: {
                type: Boolean
            }
        }
    }
</script>

<style scoped>
    .tag {
        display: inline-block;
        border-radius: 0.5rem;
        min-width: 4.25rem;
        padding: 0.5rem;
        text-align: center;
        transition: 0.2s;
        background-color: var(--cinza-claro);
    }
    .tag.ativa{
        color: var(--creme, #FFFAF3);
        background: var(--coral, #F0633C);
        font-weight: 700;
    }
</style>