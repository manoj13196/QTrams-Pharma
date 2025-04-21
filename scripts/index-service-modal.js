const serviceDetails={
    QMS: "Quality Management Systems (QMS) are integral to ensuring a consistent level of product quality and regulatory compliance in pharmaceutical operations. Our team helps design and implement tailored QMS frameworks that align with ISO 9001, GxP, and local regulatory standards. By embedding quality at every stage of production, from raw materials to final product delivery, we ensure that all systems are well-documented, fully compliant, and continually improving. Our approach emphasizes risk management, process efficiency, and sustainable practices, ensuring your organization meets all internal and external quality criteria.",
    "Audit&compliance" :"Pharmaceutical companies must meet stringent regulatory standards, and audits are the primary tool for verifying compliance. Our audit services go beyond mere checklists. We conduct thorough internal audits, external supplier audits, and comprehensive gap analyses to identify potential risks, inefficiencies, or non-compliance issues in your processes. By following international regulatory frameworks like FDA, EMA, and WHO, we help prepare your organization for inspections and mitigate the risk of penalties or business disruptions. We focus on transparency, proactive improvement, and aligning your operations with global standards.",
    CSV: "CSV is essential for ensuring that computerized systems used in the production and quality control of pharmaceutical products are both secure and compliant with GxP standards. Our CSV services include validating software, hardware, and digital systems to ensure they perform as intended, are secure, and maintain data integrity. We follow FDA, EMA, and ICH guidelines for all validation activities, ensuring that your systems are fully validated for regulatory compliance and data security. This process is critical for preventing data breaches, ensuring system reliability, and maintaining compliance during inspections.",
    "Remediation":"When regulatory deficiencies or quality issues are identified, swift and effective remediation is necessary. We offer specialized remediation services that address any compliance gaps, deviations, or non-conformities revealed during audits or inspections. Our team conducts root cause analysis, implements corrective actions, and monitors the effectiveness of these interventions to ensure long-term improvements. Whether it’s addressing non-compliance in manufacturing processes, documentation, or regulatory filings, we work alongside your team to ensure all corrective actions are fully implemented and sustained in the long term.",
};

const modal=document.getElementById('service-modal');
const modalTitle= document.getElementById('modal-title');
const modalDescription=document.getElementById('modal-description');
const modalClose=document.querySelector(".close-modal");
const modalImage=document.getElementById('modal-img');


document.querySelectorAll(".service-btn").forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        const service=btn.getAttribute('data-service');
        const description=serviceDetails[service]||"details coming soon";
        const imgsource=`../images/service/service-modal/${service}.jpg`;
        modalTitle.textContent=service;
        modalDescription.innerHTML='';

        modalImage.src=imgsource;

        if(description==='details coming soon')
        {
            modalDescription.textContent=description;
        }
        else{
            const bulletPoints=description.split(".").filter(Boolean);
            const ul=document.createElement('ul');

            bulletPoints.forEach((point)=>{
                const li=document.createElement('li');
                li.textContent=point.trim().replace(/\.$/,"")+".";
                ul.appendChild(li);
            });

           modalDescription.appendChild(ul);
        }
        modal.classList.remove('hidden');
    });
});

modalClose.addEventListener("click",()=>{
    modal.classList.add("hidden");
});

window.addEventListener("click",(event)=>{
    if(event.target===modal){
        modal.classList.add("hidden");
    }

});


