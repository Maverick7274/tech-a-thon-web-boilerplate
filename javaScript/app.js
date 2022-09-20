// Accordion

const faqItemHeaders = document.querySelectorAll(".faq-item-header")

faqItemHeaders.forEach(faqItemHeaders =>{
    faqItemHeaders.addEventListener("click", event =>{
        faqItemHeaders.classList.toggle("active")
        const faqItemBody = faqItemHeaders.nextElementSibling
        if(faqItemHeaders.classList.contains('active'))
        {
            faqItemBody.style.maxHeight = faqItemBody.scrollHeight + "px"
        }
        else
        {
            faqItemBody.style.maxHeight = 0
        }
    })
})