<template>
    <section class="selecionar-ingredientes">
        <h1 class="cabecalho titulo-ingredientes">Ingredientes</h1>

        <p class="paragrafo-lg instrucoes">
            Selecione abaixo os ingredientes que você quer usar nesta receita:
        </p>

        <ul class="categorias">
            <li v-for="categoria in categorias" :key="categoria.nome">
                <CardCategoria 
                    :categoria="categoria"
                    @adicionar-ingrediente="$emit('adicionarIngrediente', $event)"
                    @remover-ingrediente="$emit('removerIngrediente', $event)"
                    />
            </li>
        </ul>

        <p class="paragrafo dica">
            *Atenção: consideramos que você tem em casa sal, pimenta e água.
        </p>

        <BotaoPrincipal texto="Buscar receitas!" />
    </section>
</template>

<script lang="ts">
    import { obterCategoria } from '@/http/index'
    import CardCategoria from './CardCategoria.vue'
    import BotaoPrincipal from './BotaoPrincipal.vue'

    export default {
        components: {
            CardCategoria,
            BotaoPrincipal
        },
        emits: ['adicionarIngrediente', 'removerIngrediente'],
        // o bloco data é onde definimos variáveis
        data () {
            return {
                categorias: []
            }
        },
        // o bloco created roda depois do data, nesse caso específico ele é assíncrono
        async created() {
            this.categorias = await obterCategoria()
        }
    }
</script>

<!-- scoped é usado para não "vazar" esses estilos para os outros componentes -->
<style scoped>
    .selecionar-ingredientes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .titulo-ingredientes {
        color: var(--verde-medio, #3D6D4A);
        display: block;
        margin-bottom: 1.5rem;
    }

    .instrucoes {
        margin-bottom: 2rem;
    }

    .categorias {
        margin-bottom: 1rem;
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        flex-wrap: wrap;
    }

    .dica {
        align-self: flex-start;
        margin-bottom: 3.5rem;
    }

    @media only screen and (max-width: 767px) {
        .dica {
            margin-bottom: 2.5rem;
        }
    }
</style>