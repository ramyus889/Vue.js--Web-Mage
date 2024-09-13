<script setup>
const bigItems = [
  {
    id: 1,
    title: 'Build',
    color: '#4776ff',
    image: '/Build.png',
    width: 'w-[905px]',
    text: 'Have you met anyone who said they loved developing in Airflow? That’s why we designed an easy developer experience that you’ll enjoy.',
    link: 'Start building →',
    minImage1: '/Build1.svg',
    minTitle1: 'Easy developer experience',
    minText1:
      'Start developing locally with a single command or launch a dev environment in your cloud using Terraform.',
    minImage2: '/Build2.svg',
    minTitle2: 'Language of choice',
    minText2: 'Write code in Python, SQL, or R in the same data pipeline for ultimate flexibility.',
    minImage3: '/Build3.svg',
    minTitle3: 'Engineering best practices built-in',
    minText3:
      'Each step in your pipeline is a standalone file containing modular code that’s reusable and testable with data validations. No more DAGs with spaghetti code.'
  },
  {
    id: 2,
    title: 'Preview',
    color: '#885eff',
    image: '/Preview.png',
    width: 'w-[905px]',
    text: 'Are you wasting time trying to test your DAGs in production? Get instant feedback every time you run code in development.',
    link: 'Start previewing →',
    minImage1: '/Preview1.svg',
    minTitle1: 'Interactive code',
    minText1: 'Immediately see results from your code’s output with an interactive notebook UI.',
    minImage2: '/Preview2.svg',
    minTitle2: 'Data is a first-class citizen',
    minText2:
      'Each block of code in your pipeline produces data that can be versioned, partitioned, and catalogued for future use.',
    minImage3: '/Preview3.svg',
    minTitle3: 'Collaborate on cloud',
    minText3:
      'Develop collaboratively on cloud resources, version control with Git, and test pipelines without waiting for an available shared staging environment.'
  },
  {
    id: 3,
    title: 'Launch',
    color: '#ffcc19',
    image: '/Launch.webp',
    width: 'w-[905px]',
    text: 'Don’t have a large team dedicated to Airflow? Mage makes it easy for a single developer to scale up and manage thousands of pipelines.',
    link: 'Deploy pipelines →',
    minImage1: '/Launch1.svg',
    minTitle1: 'Fast deploy',
    minText1:
      'Deploy Mage to AWS, GCP, Azure, or DigitalOcean with only 2 commands using maintained Terraform templates.',
    minImage2: '/Launch2.svg',
    minTitle2: 'Scaling made simple',
    minText2:
      'Transform very large datasets directly in your data warehouse or through a native integration with Spark.',
    minImage3: '/Launch3.svg',
    minTitle3: 'Fully-featured observability',
    minText3:
      'Operationalize your pipelines with built-in monitoring, alerting, and observability through an intuitive UI.'
  }
];
</script>
<template>
  <div class="flex place-content-center px-5">
    <div class="flex flex-col gap-[200px]">
      <div v-for="item in bigItems" :key="item.id" class="flex flex-col gap-10">
        <div
          class="flex min-[1480px]:flex-row flex-col max-[1480px]:max-w-[900px] max-[1480px]:text-center gap-5 items-center"
        >
          <div class="flex flex-col gap-5 items-start">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              class="text-[96px] font-bold"
              :style="{ color: item.color }"
            >
              {{ item.title }}
            </div>
            <div data-aos="fade-up" data-aos-delay="200" class="text-[24px] text-white">
              {{ item.text }}
            </div>
            <a
              data-aos="fade-up"
              data-aos-delay="300"
              href="#"
              class="underline font-bold text-[20px] text-white"
              >{{ item.link }}</a
            >
          </div>
          <img
            data-aos="fade-left"
            data-aos-delay="200"
            :src="item.image"
            alt=""
            :class="item.width + ' rounded-2xl'"
          />
        </div>
        <div class="flex place-content-center">
          <div class="flex min-[1480px]:flex-row flex-col gap-[32px]">
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              class="flex flex-col gap-5 bg-[#1a1c21] px-[32px] pt-[16px] pb-[32px] rounded-2xl max-w-[900px] min-[1480px]:max-w-[466px]"
            >
              <img :src="item.minImage1" alt="" width="100" />
              <div class="text-[32px] text-white font-bold">{{ item.minTitle1 }}</div>
              <div class="text-[20px] text-[#b4b8c0]">{{ item.minText1 }}</div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              class="flex flex-col gap-5 bg-[#1a1c21] px-[32px] pt-[16px] pb-[32px] rounded-2xl max-w-[900px] min-[1480px]:max-w-[466px]"
            >
              <img :src="item.minImage2" alt="" width="100" />
              <div class="text-[32px] text-white font-bold">{{ item.minTitle2 }}</div>
              <div class="text-[20px] text-[#b4b8c0]">{{ item.minText2 }}</div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="800"
              class="flex flex-col gap-5 bg-[#1a1c21] px-[32px] pt-[16px] pb-[32px] rounded-2xl max-w-[900px] min-[1480px]:max-w-[466px]"
            >
              <img :src="item.minImage3" alt="" width="100" />
              <div class="text-[32px] text-white font-bold">{{ item.minTitle3 }}</div>
              <div class="text-[20px] text-[#b4b8c0]">{{ item.minText3 }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
