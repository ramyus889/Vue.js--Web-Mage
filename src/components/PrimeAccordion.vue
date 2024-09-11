<template>
  <div class="rounded-2xl">
    <Accordion :value="['0']" multiple>
      <AccordionPanel value="0">
        <AccordionHeader>Who is the ideal user for this tool?</AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            Our tool was built with data engineers and data scientists in mind, but is not limited
            to those roles. Other data professionals could find value in the tool.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="1">
        <AccordionHeader>How difficult is Mage to setup?</AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            You can quickly and easily get started by installing Mage using Docker (recommended),
            pip, or conda. Click <span class="text-[#884FC5]">here</span> for details.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="2">
        <AccordionHeader>How much does Mage cost?</AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            Mage is free as long as you are self-hosted (AWS, GCP, Azure, or Digital Ocean).
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="3">
        <AccordionHeader
          >How is Mage’s data pipeline engine software different from Airflow, etc?</AccordionHeader
        >
        <AccordionContent>
          <p class="m-0">
            Mage differentiates itself from Airflow and other tools based on 4 core design
            principles:
          </p>
          <ul>
            <li>Focus on providing the easiest developer experience.</li>
            <li>
              Ensuring engineering best practices are built-into every aspect of data pipeline
              building.
            </li>
            <li>
              Everything in Mage is about data, that’s why data is a first-class citizen in Mage.
            </li>
            <li>
              Scaling is made simple and possible without overhead of a large dedicated infra or
              DevOps team.
            </li>
          </ul>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="4">
        <AccordionHeader>What languages does Mage support?</AccordionHeader>
        <AccordionContent>
          <p class="m-0">We currently support SQL, Python, R, and PySpark.</p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="5">
        <AccordionHeader>Does Mage integrate with Spark?</AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            Yes! Click <span class="text-[#884FC5]">here</span> for a step-by-step tutorial to use
            Mage with Spark on EMR.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="6">
        <AccordionHeader>How can I contribute or request features?</AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            We love and welcome community contributions! Here is a
            <span class="text-[#884FC5]">doc</span> to get you started. To request features, add a
            “Feature request” using the New issue button in Github from this
            <span class="text-[#884FC5]">link</span>, or join our
            <span class="text-[#884FC5]">feature-request</span> Slack channel.
          </p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
</template>

<script setup>
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
</script>
