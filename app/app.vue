<template>
    <UApp>
        <div class="flex flex-col min-h-screen">
            <LayoutHeader />

            <main class="grow">
                <NuxtPage />
            </main>

            <UFooter>
                <p class="text-sm text-muted">© {{ new Date().getFullYear() }} – ILA Communication</p>
            </UFooter>
        </div>
    </UApp>
</template>
