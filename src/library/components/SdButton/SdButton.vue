
<script>
import { defineComponent, computed, ref, h } from 'vue'
import useKeyboardFocus from '@/library/hooks/useKeyboardFocus'
import sdUuid from '@/library/core/utilities/SdUuid'
export default defineComponent({
  name: 'SdButton',
  props: {
    id: {
      type: String,
      default: () => 'sd--button--' + sdUuid()
    },
    type: {
      type: String,
      default: 'button'
    },
    href: String,
    disabled: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    pill: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'md'
    },
    theme: {
      type: String,
      default: 'primary'
    },
    active: Boolean,
    exactActive: Boolean,
    align: {
      type: String,
      default: 'center'
      // ...SdPropValidator('start', 'end', 'center')
    },
    casing: String,
    block: Boolean,
    iconOnly: Boolean
  },
  setup (props, { slots, emits }) {
    const root = ref(null)
    const hasFocus = useKeyboardFocus(root)

    const rootClasses = computed(() => {
      return {
        'is--disabled': props.disabled,
        'is--rounded': props.rounded,
        'is--pill': props.pill,
        'is--flat': props.flat,
        'is--outline': props.outline,
        'is--icon-only': props.iconOnly,
        'is--block': props.block,
        // useKeyboardEvent Hook
        'is--focused': hasFocus.value,
        // Props related to RouterLink
        'is--active': props.active,
        'is--exact-active': props.exactActive
      }
    })

    const alignmentStyle = computed(() => {
      return {
        'justify-content': props.align,
        'text-transform': props.casing
      }
    })

    const sizeClass = computed(() => {
      return `is--${props.size}`
    })

    const themeClass = computed(() => {
      return `sd--button__${props.theme}`
    })

    const elementTag = computed(() => {
      if (props.href || props.type === 'link') return 'a'
      return 'button'
    })

    return () =>
      h(
        elementTag.value,
        {
          ref: root,
          id: props.id,
          type: !props.href && (props.type || 'button'),
          class: ['sd--button', themeClass.value, rootClasses.value],
          href: props.href,
          disabled: props.disabled
        },
        h(
          'div',
          {
            class: ['sd--button__content', sizeClass.value],
            style: alignmentStyle.value
          },
          slots
        )
      )
  }
})
</script>

<style lang="scss">
@import '../SdElevation/mixins';
@import '../../scss/variables';
.sd--button {
  touch-action: manipulation;
  -webkit-user-select: none;
  border: none;
  border-radius: 3px;
  font-weight: 500;
  letter-spacing: 1px;
  display: inline-flex;
  align-self: center;
  align-items: center;
  padding: 0;

  &:focus{
    outline: none;
  }

  &__content {
    position: relative;
    z-index: 10;
    flex-grow: 2;
    transition: padding .23s, font-size .23s;
    display: flex;
    align-items: center;

    .sd--icon {
      margin-top: -8px;
      margin-bottom: -8px;
      margin-right: 8px;
    }

    &.is {
      &--sm {
        font-size: rem(14);
        line-height: rem(14);
        padding: spacing(inset, sm);
        min-width: 30px;
      }

      &--md {
        font-size: rem(16);
        line-height: rem(16);
        padding: spacing(offset);
        min-width: 43px;
      }

      &--lg {
        font-size: rem(18);
        line-height: rem(18);
        padding: 12px 16px;
      }

      &--xl {
        font-size: rem(18);
        line-height: rem(18);
        padding: 16px 24px
      }
    }
  }

  &__icon {
    &--left {
      margin: -8px 8px -8px -8px;
    }

    &--right {
      margin: -8px -8px -8px 8px;
    }
  }

  @each $state, $color in $sd-color-global {
    &__#{$state} {
      @include elevation(2);
      color: var(--#{$state}-text);
      background-color: var(--#{$state});
      transition: all .13s ease-out;
      border-radius: 3px;

      &:hover {
        @include elevation(4);
        color: var(--#{$state}-accent-text);
        background-color: var(--#{$state}-accent);
        transition: all .13s ease-out;
      }

      &:active {
        @include elevation(6);
        color: var(--#{$state}-highlight-text);
        background-color: var(--#{$state}-highlight);
        transition: all .13s ease-out;
      }

      &.is {
        &--block {
          display: block;
          width: 100%;
        }

        &--active, &--exact-active{
          @include elevation(6);
          color: var(--#{$state}-highlight-text);
          background-color: var(--#{$state}-highlight);
          transition: all .13s ease-out;
        }

        &--disabled{
          background-color: var(--disabled-background);
          color: var(--disabled);
          @include elevation(0);
        }

        &--icon-only {
          display: flex;
          align-items: center;
          justify-content: center;
          .is {
            &--sm,
            &--md,
            &--xl {
              padding: 0;
              margin: 0;
              display: flex;
              text-emphasis: center;
              align-items: center;
              justify-content: center;
              min-width: 0;

              .sd--icon {
                padding: 0;
                margin: 0;
              }
            }
            &--sm {
              width: 24px;
              height: 24px;
            }

            &--md {
              width: 32px;
              height: 32px;
            }

            &--xl {
              width: 52px;
              height: 52px;
            }
          }
        }

        &--outline {
          background: none;
          border: 1px solid var(--#{$state});
          @include flatten-theme($state);
          &.is--disabled {
            border: 1px solid var(--disabled);
            @include flatten-theme(disabled);
          }
        }

        &--flat {
          background: none;
          border: none;
          outline: none;
          @include flatten-theme($state);
          &.is--disabled {
            @include flatten-theme(disabled);
          }
        }

        &--rounded {
          border-radius: 30px;
        }

        &--pill {
          border-radius: 30px;
          .sd--button__content {
            padding-left: 20px;
            padding-right: 20px;
          }
        }

        &--focused {
          box-shadow: 0 0 0 5px var(--#{$state}-highlight);
          transition: box-shadow .2s ease-out;
        }
      }
    }
  }
}
</style>
