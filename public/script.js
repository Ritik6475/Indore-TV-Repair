function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  function toggleDrawer() {
    const drawer = document.getElementById('mobileDrawer');
    drawer.classList.toggle('open');
  }
  
  function handleMobileNavClick(id) {
    scrollToSection(id);
    toggleDrawer(); // Close drawer after click
  }



  const faqs = [
    {
      question: "What types of TVs do you repair?",
      answer: "We repair all types of TVs, including LED, OLED, Plasma, LCD, and Smart TVs...",
      icon: "fas fa-tv"
    },
    {
      question: "क्या आप किस प्रकार के टीवी की मरम्मत करते हैं?",
      answer: "हम सभी प्रकार के टीवी की मरम्मत करते हैं, जिसमें LED, OLED, Plasma, LCD और Smart TVs शामिल हैं...",
      icon: "fas fa-tv"
    },
    {
      question: "How long does a TV repair take?",
      answer: "Most minor issues are fixed within a few hours. Complex repairs may take 1-2 days...",
      icon: "fas fa-clock"
    },
    {
      question: "टीवी की मरम्मत में कितना समय लगेगा?",
      answer: "ज्यादातर मामूली समस्याएँ कुछ घंटों में ठीक हो जाती हैं, परंतु जटिल मरम्मत में 1-2 दिन लग सकते हैं...",
      icon: "fas fa-clock"
    },
    {
      question: "Do you provide home service?",
      answer: "Yes, we offer doorstep TV repair services across Indore...",
      icon: "fas fa-tools"
    },
    {
      question: "क्या आप घर पर सेवा प्रदान करते हैं?",
      answer: "हां, हम इंदौर में दरवाजे पर टीवी मरम्मत सेवाएं प्रदान करते हैं...",
      icon: "fas fa-tools"
    },
    {
      question: "Is there a warranty on repairs?",
      answer: "Yes, all our repairs come with a warranty depending on the service and parts replaced...",
      icon: "fas fa-shield-alt"
    },
    {
      question: "क्या मरम्मत पर वारंटी है?",
      answer: "हां, हमारी सभी मरम्मतों पर वारंटी होती है...",
      icon: "fas fa-shield-alt"
    },
    {
      question: "How can I book a repair service?",
      answer: "You can book an appointment by calling our helpline.",
      icon: "fas fa-phone"
    },
    {
      question: "मैं मरम्मत सेवा कैसे बुक कर सकता हूँ?",
      answer: "आप हमारी हेल्पलाइन पर कॉल करके एक अपॉइंटमेंट बुक कर सकते हैं।",
      icon: "fas fa-phone"
    },
    {
      question: "In which areas do you serve?",
      answer: "We serve all major areas in Indore including Vijay Nagar, Palasia, Rajwada, Mhow, and more.",
      icon: "fas fa-map-marker-alt"
    },
    {
      question: "आप किस-किस क्षेत्र में सेवा देते हैं?",
      answer: "हम इंदौर के सभी क्षेत्रों में टीवी मरम्मत सेवाएं प्रदान करते हैं...",
      icon: "fas fa-map-marker-alt"
    }
  ];
  
  const faqList = document.getElementById("faqList");
  
  faqs.forEach((faq, index) => {
    const item = document.createElement("div");
    item.className = "faq-item";
  
    const question = document.createElement("div");
    question.className = "faq-question";
    question.innerHTML = `<i class="${faq.icon}"></i>${faq.question}`;
  
    const answer = document.createElement("div");
    answer.className = "faq-answer";
    answer.innerText = faq.answer;
  
    question.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  
    item.appendChild(question);
    item.appendChild(answer);
    faqList.appendChild(item);
  });
  

  function handleCallClick() {
    window.location.href = "tel:+918889733753";
  }



  


  
  