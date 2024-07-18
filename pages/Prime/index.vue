<template>
    <div>
        <h1>Prime vue ui</h1>
        <NuxtLink to="/">Back to home page</NuxtLink>
        <div class="card flex justify-center mt-4">
            <Prime-Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City"
                class="w-full md:w-56" />
            <Prime-Button type="button" label="Search" class="bg-green-500 ml-3 mr-4" severity="success"
                icon="pi pi-search" :loading="loading" @click="load" />

            <Prime-Button type="button" label="切换黑色主题" class="flex-shrink mr-4" severity="success" icon="pi pi-search"
                @click="toggleDarkMode" />

            <Prime-Button label="Warn" severity="warn" rounded />

            <h2 class="bg-blue-500 text-center flex items-center p-2 border-r-teal-200 ml-2 mr-4">hello</h2>

            <div class="mr-4">
                <Prime-Color-Picker v-model="color" />
            </div>

            <div class="mr-4">
                <PrimeDatePicker v-model="date" />
            </div>

            <div class="mr-4">
                <PrimeFloatLabel>
                    <PrimeInputText id="username" v-model="username" />
                    <label for="username">Username</label>
                </PrimeFloatLabel>
            </div>
            <div class="mr-4">
                <PrimeIconField>
                    <PrimeInputIcon class="pi pi-search" />
                    <PrimeInputText v-model="value1" placeholder="Search" />
                </PrimeIconField>
            </div>
            <div class="mr-4">
                <PrimeInputGroup>
                    <PrimeInputGroupAddon>
                        <i class="pi pi-user"></i>
                    </PrimeInputGroupAddon>
                    <PrimeInputText placeholder="Username" />
                </PrimeInputGroup>
            </div>
        </div>
        <div class="card flex justify-center mt-4">
            <div class="mr-4">
                <PrimeInputMask id="basic" v-model="value2" mask="99-999999" placeholder="99-999999" />
            </div>
            <div class="mr-4">
                <PrimeInputNumber v-model="value3" inputId="minmaxfraction" :minFractionDigits="2"
                    :maxFractionDigits="5" fluid />
            </div>
            <div class="mr-4">
                <PrimeInputOtp v-model="value4" mask />
            </div>
            <div class="mr-4">
                <PrimeKnob v-model="value5" />
            </div>
            <div class="mr-4">
                <PrimeMultiSelect v-model="selectedCountries" :options="countries" optionLabel="name" filter
                    placeholder="Select Countries" display="chip" class="w-full md:w-80">
                    <template #option="slotProps">
                        <div class="flex items-center">
                            <img :alt="slotProps.option.name"
                                src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`" style="width: 18px" />
                            <div>{{ slotProps.option.name }}</div>
                        </div>
                    </template>
                    <template #footer>
                        <div class="py-2 px-4">
                            <b>{{ selectedCountries ? selectedCountries.length : 0 }}</b> item{{ (selectedCountries ?
                selectedCountries.length : 0) > 1 ? 's' : '' }} selected.
                        </div>
                    </template>
                </PrimeMultiSelect>
            </div>
            <div class="mr-4">
                <PrimeFloatLabel class="w-full md:w-80">
                    <PrimeMultiSelect id="ms-cities" v-model="selectedCities" :options="cities2" optionLabel="name"
                        filter :maxSelectedLabels="3" class="w-full" />
                    <label for="ms-cities">MultiSelect</label>
                </PrimeFloatLabel>
            </div>
            <div class="mr-4">
                <PrimePassword v-model="value6">
                    <template #header>
                        <div class="font-semibold text-xm mb-4">Pick a password</div>
                    </template>
                    <template #footer>
                        <PrimeDivider />
                        <ul class="pl-2 ml-2 my-0 leading-normal">
                            <li>At least one lowercase</li>
                            <li>At least one uppercase</li>
                            <li>At least one numeric</li>
                            <li>Minimum 8 characters</li>
                        </ul>
                    </template>
                </PrimePassword>
            </div>
        </div>
        <div class="card flex justify-center mt-4">
            <div class="mr-4 flex justify-center">
                <div v-for="category in categories" :key="category.key" class="mr-2">
                    <PrimeRadioButton v-model="selectedCategory" :inputId="category.key" name="dynamic"
                        :value="category.name" />
                    <label :for="category.key" class="ml-2">{{ category.name }}</label>
                </div>

            </div>
            <div class="mr-4">
                <PrimeRating v-model="value7" />
            </div>
            <div class="mr-4">
                <PrimeTextarea v-model="value8" autoResize rows="3" cols="30" />
            </div>
            <div class="mr-4">
                <PrimeToggleButton v-model="checked" onLabel="Locked" offLabel="Unlocked" onIcon="pi pi-lock"
                    offIcon="pi pi-lock-open" class="w-36" aria-label="Do you confirm" />
            </div>
            <div class="mr-4">
                <PrimeToggleSwitch v-model="checked2" :invalid="!checked2" />
            </div>
            <div class="mr-4"></div>
        </div>
        <div class="card flex justify-center mt-4">
            <div class="mr-4">
                <PrimeDataTable size="small" :value="customers" paginator :rows="5"
                    :rowsPerPageOptions="[5, 10, 20, 50]" :pt="{
                table: { style: 'min-width: 50rem; background: red;' },
                bodyrow: ({ props }) => ({
                    class: [{ 'font-bold': props.frozenRow }]
                })
            }" paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}">
                    <template #paginatorstart>
                        <PrimeButton type="button" icon="pi pi-refresh" text />
                    </template>
                    <template #paginatorend>
                        <PrimeButton type="button" icon="pi pi-download" text />
                    </template>
                    <PrimeColumn field="name" header="Name" style="width: 25%"></PrimeColumn>
                    <PrimeColumn field="country.name" header="Country" style="width: 25%"></PrimeColumn>
                    <PrimeColumn field="company" header="Company" style="width: 25%"></PrimeColumn>
                    <PrimeColumn field="representative.name" header="Representative" style="width: 25%"></PrimeColumn>
                </PrimeDataTable>
            </div>
            <div class="mr-4">
                <div class="flex flex-col">
                    <div v-for="i in 1" :key="i">
                        <div class="xl:flex-row xl:items-start gap-6"
                            :class="{ 'border-t border-surface-200 dark:border-surface-700': i !== 0 }">
                            <PrimeSkeleton width="49rem" height="2.5rem" />
                            <div
                                class="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-6 mt-2 mb-2">
                                <div class="flex flex-col items-center sm:items-start gap-4">
                                    <div class="flex items-center gap-4">
                                        <PrimeSkeleton width="9rem" height="2.5rem" />
                                        <PrimeSkeleton width="9rem" height="2.5rem" />
                                        <PrimeSkeleton width="9rem" height="2.5rem" />
                                        <PrimeSkeleton width="9rem" height="2.5rem" />
                                        <PrimeSkeleton width="9rem" height="2.5rem" />
                                    </div>
                                </div>
                            </div>
                            <PrimeSkeleton width="49rem" height="2.5rem" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card flex justify-center mt-10">
            <PrimeCard>
                <template #title>Simple Card</template>
                <template #content>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
                        repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa
                        ratione quam perferendis esse, cupiditate neque
                        quas!
                    </p>
                </template>
            </PrimeCard>
        </div>
        <div class="card flex justify-center mt-10 w-100">
            <PrimeTabs value="0">
                <PrimeTabList>
                    <PrimeTab value="0">Header I</PrimeTab>
                    <PrimeTab value="1">Header II</PrimeTab>
                </PrimeTabList>
                <PrimeTabPanels>
                    <PrimeTabPanel value="0">
                        <p class="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </PrimeTabPanel>
                    <PrimeTabPanel value="1">
                        <p class="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                    </PrimeTabPanel>
                </PrimeTabPanels>
            </PrimeTabs>
        </div>
        <div class="card flex justify-center mt-10 w-100">
            <div class="mr-4">
                <PrimeButton @click="showTemplate()" label="Save As Confirm dialog"></PrimeButton>
            </div>
            <div class="mr-4">
                <PrimeButton label="Show dialog" @click="visible = true" />

                <PrimeDialog v-model:visible="visible" modal header="Edit Profile" :style="{ width: '25rem' }">
                    <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
                    <div class="flex items-center gap-4 mb-4">
                        <label for="username" class="font-semibold w-24">Username</label>
                        <PrimeInputText id="username" class="flex-auto" autocomplete="off" />
                    </div>
                    <div class="flex items-center gap-4 mb-8">
                        <label for="email" class="font-semibold w-24">Email</label>
                        <PrimeInputText id="email" class="flex-auto" autocomplete="off" />
                    </div>
                    <div class="flex justify-end gap-2">
                        <PrimeButton type="button" label="Cancel" severity="secondary" @click="visible = false">
                        </PrimeButton>
                        <PrimeButton type="button" label="Save" @click="visible = false"></PrimeButton>
                    </div>
                </PrimeDialog>
            </div>
            <div class="mr-4">
                <PrimeDrawer v-model:visible="visible2" header="Drawer">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip
                        ex ea commodo consequat.</p>
                </PrimeDrawer>
                <PrimeButton icon="pi pi-arrow-right" @click="visible2 = true" />
            </div>
            <div class="mr-4">
                <PrimeBreadcrumb :home="home" :model="items" />
            </div>
        </div>



        <div class="mr-4"></div>
        <div class="mr-4"></div>
        <div class="mr-4"></div>
        <div class="mr-4"></div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

const loading = ref(false);

const load = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 2000);
};

const toggleDarkMode = () => {
    const element = document.querySelector('html');
    element.classList.toggle('my-app-dark');
}

const color = ref();
const date = ref();
const username = ref(null);
const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(23.35);
const value4 = ref(null);
const value5 = ref(22);

const selectedCountries = ref();
const countries = ref([
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
]);

const selectedCities = ref();
const cities2 = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

const value6 = ref(null);
const selectedCategory = ref('Production');
const categories = ref([
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' }
]);
const value7 = ref(null);
const value8 = ref(null);
const checked = ref(null);
const checked2 = ref(null);

const customers = ref([
    {
        id: 1000,
        name: 'James Butt',
        country: {
            name: 'Algeria',
            code: 'dz'
        },
        company: 'Benton, John B Jr',
        date: '2015-09-13',
        status: 'unqualified',
        verified: true,
        activity: 17,
        representative: {
            name: 'Ioni Bowcher',
            image: 'ionibowcher.png'
        },
        balance: 70663
    }
]);

const confirm = useConfirm();
const toast = useToast();
const showTemplate = () => {
    confirm.require({
        group: 'templating',
        header: 'Confirmation',
        message: 'Please confirm to proceed moving forward.',
        icon: 'pi pi-exclamation-circle',
        rejectProps: {
            label: 'Cancel',
            icon: 'pi pi-times',
            outlined: true,
            size: 'small'
        },
        acceptProps: {
            label: 'Save',
            icon: 'pi pi-check',
            size: 'small'
        },
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
const visible = ref(false);
const visible2 = ref(false);

const home = ref({
    icon: 'pi pi-home'
});
const items = ref([
    { label: 'Electronics' },
    { label: 'Computer' },
    { label: 'Accessories' },
    { label: 'Keyboard' },
    { label: 'Wireless' }
]);

</script>

<style lang="scss" scoped></style>