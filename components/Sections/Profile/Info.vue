<template>
  <div class="w-full block h-full">
    <CardsProfileInfoTitle :title="$t('personal_info')" class="mb-3 mt-6" />
    <div class="grid grid-cols-2 gap-5">
      <Transition mode="out-in">
        <div :key="loading">
          <CardsProfileInfo
            v-if="!loading"
            :title="$t('surname')"
            :name="data?.surname"
          />
          <CardsProfileInfoLoading v-else />
        </div>
      </Transition>
      <Transition mode="out-in">
        <div :key="loading">
          <CardsProfileInfo
            v-if="!loading"
            :title="$t('name')"
            :name="data?.name"
          />
          <CardsProfileInfoLoading v-else />
        </div>
      </Transition>
      <div class="col-span-2">
        <Transition mode="out-in">
          <div :key="loading">
            <CardsProfileInfo
              v-if="!loading"
              :title="$t('name_of_father')"
              :name="data?.nameOfFather"
            />
            <CardsProfileInfoLoading v-else />
          </div>
        </Transition>
      </div>
      <Transition mode="out-in">
        <div :key="loading">
          <CardsProfileInfo
            v-if="!loading"
            :title="$t('birth')"
            :name="data?.birth"
          />
          <CardsProfileInfoLoading v-else />
        </div>
      </Transition>
      <Transition mode="out-in">
        <div :key="loading">
          <CardsProfileInfo
            v-if="!loading"
            :title="$t('gander')"
            :name="data?.gender"
          />
          <CardsProfileInfoLoading v-else />
        </div>
      </Transition>
      <Transition mode="out-in">
        <div :key="loading">
          <CardsProfileInfo
            v-if="!loading"
            :title="$t('citizen')"
            :name="data?.citizen"
          />
          <CardsProfileInfoLoading v-else />
        </div>
      </Transition>
      <Transition mode="out-in">
        <div :key="loading">
          <CardsProfileInfo
            v-if="!loading"
            :title="$t('location')"
            :name="data?.location"
          />
          <CardsProfileInfoLoading v-else />
        </div>
      </Transition>
      <Transition mode="out-in">
        <div :key="loading">
          <CardsProfileInfo
            v-if="!loading"
            :title="$t('phone_number')"
            is-phone
            :name="phoneNumberFormatter(data?.phoneNumber)"
          />
          <CardsProfileInfoLoading v-else />
        </div>
      </Transition>
    </div>
    <CardsProfileInfoTitle :title="$t('personal_info')" class="mb-3 mt-6" />
    <div class="grid grid-cols-2 gap-5">
      <Transition mode="out-in">
        <div :key="loading">
          <CardsProfileInfo
            v-if="!loading"
            :title="$t('passport_of_series')"
            :name="data?.passport.series"
          />
          <CardsProfileInfoLoading v-else />
        </div>
      </Transition>
      <Transition mode="out-in">
        <div :key="loading">
          <CardsProfileInfo
            v-if="!loading"
            :title="$t('number')"
            :name="data?.passport.number"
          />
          <CardsProfileInfoLoading v-else />
        </div>
      </Transition>
      <Transition mode="out-in">
        <div :key="loading">
          <CardsProfileInfo
            v-if="!loading"
            :title="$t('start_date')"
            :name="data?.passport.startDate"
          />
          <CardsProfileInfoLoading v-else />
        </div>
      </Transition>
      <Transition mode="out-in">
        <div :key="loading">
          <CardsProfileInfo
            v-if="!loading"
            :title="$t('end_date')"
            :name="data?.passport.endDate"
          />
          <CardsProfileInfoLoading v-else />
        </div>
      </Transition>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  loading: boolean
  data: {
    image: string
    fullName: string
    location: string
    name: string
    surname: string
    nameOfFather: string
    birth: string
    gender: string
    citizen: string
    phoneNumber: string
    passport: {
      series: string
      number: string
      startDate: string
      endDate: string
    }
  }
}
defineProps<Props>()
</script>
