<template>
    <div class="sd--field">
      <slot />
    </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    label: String,
    value: [String, Number],
    placeholder: String
  }
}
</script>

<style lang="scss">
  .sd--field{
    & > label {
      display:block;
      width: 100%;
      text-transform: uppercase;
      font-weight: 500;
      letter-spacing: 1px;
      font-size: 14px;
      margin-bottom: 4px;
      color: var(--text-accent)
    }
    & > input {
      color: var(--text);
      padding: 8px;
      display:block;
      outline: none;
      border: 1px solid var(--background-accent);
      border-bottom-width: 0;
      box-shadow: 0 1px 0 var(--primary);
      background: var(--background);
      transition: box-shadow .23s ease-in-out, border .23s ease-in-out, background .23s ease-in-out;
      &:focus, &:active{
        border: 1px solid var(--background-highlight);
        border-bottom-width: 0;
        box-shadow: 0 4px 0 var(--primary);
      }
      &:disabled {
        background-color: var(--background-highlight);
        color: var(--text-highlight);

      }
    }
    & > span{
      display:block;
      margin-bottom: 4px;
    }

    & > input + span{
      margin-top: 8px;
    }
  }
</style>
