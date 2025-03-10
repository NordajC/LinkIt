<script lang="ts">

    let { value, open } = $props();
  </script>
  
  <div class="accordion-item">
    <button class="accordion-trigger" onclick={() => (open = !open)}>
      <slot name="trigger"></slot>
    </button>
    {#if open}
      <div class="accordion-content">
        <slot name="content"></slot>
      </div>
    {/if}
  </div>
  
  <style>
    .accordion-item {
      border-bottom: 1px solid #ddd;
    }
    .accordion-trigger {
      width: 100%;
      text-align: left;
      padding: 10px;
      font-weight: bold;
      cursor: pointer;
    }
    .accordion-content {
      padding: 10px;
      display: block;
    }
  </style>
  