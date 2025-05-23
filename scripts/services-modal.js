const serviceDetails = {
  QMS: "Quality Management Systems (QMS) are integral to ensuring a consistent level of product quality and regulatory compliance in pharmaceutical operations. Our team helps design and implement tailored QMS frameworks that align with ISO 9001, GxP, and local regulatory standards. By embedding quality at every stage of production, from raw materials to final product delivery, we ensure that all systems are well-documented, fully compliant, and continually improving. Our approach emphasizes risk management, process efficiency, and sustainable practices, ensuring your organization meets all internal and external quality criteria.",
  "Audit & Compliance":
    "Pharmaceutical companies must meet stringent regulatory standards, and audits are the primary tool for verifying compliance. Our audit services go beyond mere checklists. We conduct thorough internal audits, external supplier audits, and comprehensive gap analyses to identify potential risks, inefficiencies, or non-compliance issues in your processes. By following international regulatory frameworks like FDA, EMA, and WHO, we help prepare your organization for inspections and mitigate the risk of penalties or business disruptions. We focus on transparency, proactive improvement, and aligning your operations with global standards.",
  "Mock Inspections":
    "Mock inspections simulate real regulatory inspections, allowing your team to assess their preparedness in a controlled environment. These inspections provide a thorough review of your facilities, documentation, and quality systems to identify gaps or potential non-compliance before the actual inspection. We follow regulatory inspection protocols from bodies like the FDA, EMA, and TGA, conducting realistic scenarios to test your procedures. Post-inspection, we provide detailed reports with actionable remediation plans to ensure your company is fully prepared for any upcoming audits.",
  "Data Integrity":
    "Ensuring the integrity of data is paramount in the pharmaceutical industry, where decisions directly impact patient safety and product efficacy. We help pharmaceutical companies assess their data management systems to ensure compliance with the principles of ALCOA+ (Attributable, Legible, Contemporaneous, Original, Accurate, and Complete) as outlined in global regulatory guidelines. Our service includes reviewing data storage practices, security protocols, and electronic records to identify vulnerabilities. We provide practical solutions for strengthening data integrity, maintaining audit trails, and ensuring transparency, which are essential for regulatory compliance and maintaining consumer trust.",
  Remediation:
    "When regulatory deficiencies or quality issues are identified, swift and effective remediation is necessary. We offer specialized remediation services that address any compliance gaps, deviations, or non-conformities revealed during audits or inspections. Our team conducts root cause analysis, implements corrective actions, and monitors the effectiveness of these interventions to ensure long-term improvements. Whether it’s addressing non-compliance in manufacturing processes, documentation, or regulatory filings, we work alongside your team to ensure all corrective actions are fully implemented and sustained in the long term.",
  "Due Diligence Audits":
    "Due diligence audits are critical when evaluating potential business acquisitions, partnerships, or new market entries. We offer comprehensive assessments that evaluate the regulatory standing, quality systems, and operational processes of target companies. Our audits identify risks related to non-compliance, product quality, and intellectual property, ensuring that you make well-informed decisions. Whether entering a new market or acquiring a competitor, our due diligence audits provide an in-depth understanding of the legal, financial, and operational risks involved, enabling informed strategic decisions.",
  "Scientific & Technical Support":
    "Our scientific and technical support services are designed to assist clients at every stage of product development. From initial research to formulation and troubleshooting, we provide expert guidance to ensure technical aspects meet industry standards and regulatory requirements. Whether you’re working on biologics, small molecules, or other innovative therapies, we offer strategic insights that optimize development timelines and enhance product quality. We focus on supporting R&D teams to ensure that scientific integrity is maintained, that trials and formulations are correctly executed, and that regulatory documentation is in order.",
  "Analytical Services":
    "Reliable and robust analytical services are fundamental in ensuring pharmaceutical products meet stringent regulatory requirements. We support pharmaceutical companies with a comprehensive range of services, including method development, method validation, stability studies, and analytical testing. Our team ensures that all testing is performed in accordance with ICH Q2 and FDA guidelines, guaranteeing accurate, reproducible results. From testing raw materials to final products, we help verify that your products are safe, effective, and compliant with global standards.",
  "Manufacturing Services":
    "Effective manufacturing practices are key to ensuring high-quality pharmaceutical products. Our consulting services help optimize your manufacturing processes through Process Optimization, Tech Transfer, and Capacity Planning. We work closely with your teams to ensure production lines are compliant with GMP standards, improve efficiencies, and implement best practices for batch execution. Our focus on operational excellence guarantees that your manufacturing processes are scalable, cost-efficient, and meet all regulatory guidelines, from product conception to final delivery.",
  "Validation / Qualification":
    "Validation and qualification services are essential for ensuring that all systems, equipment, and processes meet regulatory requirements and perform consistently. Our team assists in the qualification of equipment, facilities, and utilities, as well as process validation, cleaning validation, and computerized systems validation (CSV). We follow international guidelines such as FDA, EMA, and GxP, ensuring that every step of the validation process is meticulously documented and compliant. By focusing on comprehensive documentation and quality assurance, we help reduce risks and ensure that your systems are always operating within the required parameters.",
  CSV: "CSV is essential for ensuring that computerized systems used in the production and quality control of pharmaceutical products are both secure and compliant with GxP standards. Our CSV services include validating software, hardware, and digital systems to ensure they perform as intended, are secure, and maintain data integrity. We follow FDA, EMA, and ICH guidelines for all validation activities, ensuring that your systems are fully validated for regulatory compliance and data security. This process is critical for preventing data breaches, ensuring system reliability, and maintaining compliance during inspections.",
  "Clinical Trials Support":
    "Clinical trials are a cornerstone of pharmaceutical development, and proper support is crucial to ensure compliance and data integrity. We assist pharmaceutical companies in managing clinical trial processes from study design to regulatory submissions, monitoring, and post-trial reporting. Our services ensure that trials are compliant with GCP (Good Clinical Practice), ICH guidelines, and local regulations. We provide support for clinical trial documentation, subject recruitment, and regulatory filings, ensuring that your clinical trials run smoothly, ethically, and within the required regulatory framework.",
  "Data Management":
    "Data management is crucial in the pharmaceutical industry, where accurate data drives decision-making and regulatory compliance. Our services include comprehensive solutions for clinical data capture, storage, and analysis, ensuring that data is handled in compliance with GxP and FDA regulations. We provide expertise in data governance, data cleaning, statistical analysis, and reporting, ensuring that your data is robust, reliable, and fully compliant. By improving data management practices, we help enhance the quality and accuracy of the data, ultimately driving better outcomes and smoother regulatory processes.",
  "Regulatory Services":
    "Our regulatory services provide end-to-end support for pharmaceutical companies, from initial market entry to post-market surveillance. We assist with regulatory submissions, dossier preparation, and interactions with regulatory agencies such as the FDA, EMA, and Health Canada. Our team ensures that all your products meet the regulatory requirements of the markets they are entering. We also support ongoing regulatory compliance, helping you stay ahead of evolving guidelines and ensuring that your products are always in line with the latest regulations.",
};
const modal = document.getElementById("service-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.querySelector(".close-modal");
const modalImage=document.getElementById('modal-img');

// Loop through all service cards
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("click", () => {
    const service = card.getAttribute("data-service");
    modalTitle.textContent = service;

    const description = serviceDetails[service] || "Details coming soon.";
    const imgsource=`../images/service/service-modal/${service}.jpg`;

    modalDescription.innerHTML = "";
    modalImage.src=imgsource;


    if (description === "Details coming soon.") {
      modalDescription.textContent = description;
    } else {
      // Split paragraph into bullet points (by sentence)
      const bulletPoints = description.split(". ").filter(Boolean);
      const ul = document.createElement("ul");

      bulletPoints.forEach(point => {
        const li = document.createElement("li");
        li.textContent = point.trim().replace(/\.$/, "") + ".";
        ul.appendChild(li);
      });

      modalDescription.appendChild(ul);
    }

    modal.classList.remove("hidden");
  });
});

// Close modal on X button
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Close modal when clicking outside the box
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});

