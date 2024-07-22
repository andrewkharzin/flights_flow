<template>
  <div class="overflow-x-hidden min-h-screen bg-white dark:bg-gradient-to-b from-slate-800 to-slate-950 text-gray-800 dark:text-white">
    <LayoutsPageNavbar class="h-[64px] max-h-[64px]" />
    <LayoutsPageContent>
      <slot />
    </LayoutsPageContent>
    <LayoutsPageFooter class="h-[52px] md:h-[42px]" />
  </div>
</template>