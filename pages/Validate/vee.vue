<template>
    <div>
        <h1>Vee Validate Page</h1>
        <NuxtLink to="/">Back to home page</NuxtLink>

        <div class="text-center mb-10">
            <h5 class="mb-2">表单项单独验证</h5>
            <Form class="mb-4 border-dashed">
                <div class="mb-2">
                    <Field name="name" type="text" placeholder="name" :rules="isRequired" />
                    <ErrorMessage name="name" class="validate-error" as="div" />
                </div>
                <div class="mb-2">
                    <Field name="email" type="text" placeholder="email" rules="required|email" />
                    <ErrorMessage name="email" class="validate-error" as="div" />
                </div>
                <div class="mb-2">
                    <Field name="password" type="password" placeholder="password" :rules="passwordRules" />
                    <ErrorMessage name="password" class="validate-error" as="div" />
                </div>
            </Form>
        </div>
        <div class="text-center mb-10">
            <h5 class="mb-2">表单项单独验证+button提交验证</h5>
            <Form v-slot="{ meta, isSubmitting, setFieldValue, setValues, handleReset }" :initial-values="initialValues"
                :initial-errors="initialErrors" @submit="onSubmit" @invalid-submit="onInvalidSubmit"
                :validation-schema="simpleSchema">
                <div class="mb-2">
                    <Field name="name" type="text" placeholder="name" />
                    <ErrorMessage name="name" class="validate-error" as="div" />
                </div>
                <div class="mb-2">
                    <Field name="email" type="text" placeholder="email" />
                    <ErrorMessage name="email" class="validate-error" as="div" />
                </div>
                <div class="mb-2">
                    <Field name="password" type="password" placeholder="password" />
                    <ErrorMessage name="password" class="validate-error" as="div" />
                </div>
                <div class="flex justify-center">
                    <div class="mr-2">
                        <PrimeButton type="Submit" severity="primary" :disabled="!meta.dirty">submit(slot dirty)
                        </PrimeButton>
                    </div>
                    <div class="mr-2">
                        <PrimeButton type="Submit" severity="primary" :disabled="isSubmitting">submit(slot
                            isSubmitting)</PrimeButton>
                    </div>
                    <div class="mr-2">
                        <PrimeButton type="button" label="setNameFieldValue" @click="setFieldValue('name', 'test')">
                        </PrimeButton>
                    </div>
                    <div class="mr-2">
                        <PrimeButton type="button"
                            @click="setValues({ name: 'test', email: '22@qq.com', password: 'test1234' })">setValues
                        </PrimeButton>
                    </div>
                    <div class="mr-2">
                        <PrimeButton type="button" @click="setValues({ name: '', email: '', password: '' })">reset
                            Values
                        </PrimeButton>
                    </div>
                    <div class="mr-2">
                        <PrimeButton type="reset" class="mr-2">Reset1</PrimeButton>
                        <PrimeButton @click="handleReset">Reset2</PrimeButton>
                    </div>
                </div>
            </Form>
        </div>
        <div class="flex justify-center text-center mb-10">
            <form @submit="veeStore.signup" @reset="veeStore.reset" novalidate class="from-wrap">
                <h5 class="mb-2">表单项验证+pinia</h5>
                <div class="mb-3">
                    <div class="from-item flex justify-between">
                        <label for="username" class="form-label text-right">Username</label>
                        <PrimeInputText id="username" v-model="name" v-bind="nameProps" />
                    </div>
                    <div class="validate-error form-validate">{{ errors.name }}</div>
                </div>
                <div class="mb-3">
                    <div class="from-item flex justify-between">
                        <label for="email" class="form-label text-right">Email</label>
                        <PrimeInputText id="email" v-model="email" v-bind="emailProps" />
                    </div>
                    <div class="validate-error form-validate">{{ errors.email }}</div>
                </div>
                <div class="mb-3">
                    <div class="from-item flex justify-between">
                        <label for="password" class="form-label text-right">Password</label>
                        <PrimeInputText id="password" type="password" v-model="password" v-bind="passwordProps" />
                    </div>
                    <div class="validate-error form-validate">{{ errors.password }}</div>
                </div>
                <div class="mb-3">
                    <div class="from-item flex justify-between">
                        <label for="pizza" class="form-label text-right">Pizza</label>
                        <div class="flex flex-wrap gap-4">
                            <div class="flex items-center">
                                <PrimeRadioButton v-model="ingredient" inputId="ingredient1" name="pizza"
                                    v-bind="ingredientProps" value="Cheese" />
                                <label for="ingredient1" class="ml-2">Cheese</label>
                            </div>
                            <div class="flex items-center">
                                <PrimeRadioButton v-model="ingredient" inputId="ingredient2" name="pizza"
                                    v-bind="ingredientProps" value="Mushroom" />
                                <label for="ingredient2" class="ml-2">Mushroom</label>
                            </div>
                        </div>
                    </div>
                    <div class="validate-error form-validate">{{ errors.ingredient }}</div>
                </div>
                <div class="mb-3">
                    <div class="from-item flex justify-between">
                        <label for="city" class="form-label text-right">City</label>
                        <PrimeSelect :options="cities" optionLabel="name" optionValue="code" v-model="city"
                            v-bind="cityProps" placeholder="Select a City" class="w-52" />
                    </div>
                    <div class="validate-error form-validate">{{ errors.city }}</div>
                </div>
                <div class="flex justify-center ml-10">
                    <PrimeButton type="submit">Submit</PrimeButton>
                    <PrimeButton type="reset" class="ml-5">Reset</PrimeButton>
                </div>

            </form>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { Field, Form, ErrorMessage } from 'vee-validate';
import { object, string } from 'yup';

const veeStore = useVeeStore();
const { name, nameProps, email, emailProps, password, passwordProps, ingredient, ingredientProps, city, cityProps, errors } =
    storeToRefs(veeStore);

const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

const isRequired = (value) => {
    if (value && value.trim()) {
        return true;
    }
    return 'This is required';
}
const passwordRules = string().required().min(8)

const simpleSchema = markRaw(object({
    name: string().required().label('Name'),
    email: string().required().label('Email'),
    password: string().required().min(8).label('Password')
}));

const initialValues = ref({
    name: 'qiao',
    email: '',
    password: ''
})

const initialErrors = ref({
    name: 'This name is already taken',
    email: 'This email is already taken',
    password: 'The password is too short',
})

const onSubmit = (values, { resetForm }) => {
    console.log('onSubmit', values);
    resetForm()
}

const onInvalidSubmit = ({ values, errors, results }) => {
    console.log('onInvalidSubmit', values, errors, results)
}
</script>

<style lang="scss" scoped>
.validate-error {
    color: red;
}

.form-validate {
    width: 65%;
    margin-left: 40%;
    text-align: left;
}

.from-wrap {
    width: 300px;
}

.form-label {
    display: inline-block;
    width: 35%;
}
</style>