<script lang="ts">
  export let text: string = '🚧 Under construction — Things may change and some features may not work yet.'
  export let classes: string = ''
</script>

<div class={`uc-banner ${classes}`} role="status" aria-live="polite">
  <div class="container row items-center gap-3">
    <span class="icon" aria-hidden="true">🚧</span>
    <p class="message">{text}</p>
  </div>
</div>

<style lang="scss">
  .uc-banner {
    position: sticky;
    top: 50px; // sits right under the sticky NavMenu which is 50px tall
    z-index: 9; // below NavMenu (which has z-index:10), above page content
    background: var(--warning, #f5c542);
    color: var(--main-text);
    border-bottom: 1px solid var(--border);

    // Provide a subtle theme-friendly background if --warning is not defined
    background: color-mix(in oklab, var(--secondary) 25%, var(--main) 75%);

    .container {
      padding: 8px 12px;
    }

    .icon {
      font-size: 1.1em;
    }

    .message {
      margin: 0;
      line-height: 1.4;
      font-weight: 600;
      letter-spacing: 0.4px;
    }
  }

  @media (max-width: 640px) {
    .uc-banner .message {
      font-size: 0.95rem;
    }
  }
</style>
