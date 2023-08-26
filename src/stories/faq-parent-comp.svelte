<script>
    import FaqComp from '../component/faq-comp.svelte';
    export let backgroundColor;
    let BgStyle = backgroundColor ? `background-color: ${backgroundColor}` : '';
    export let ques1='Which location does the platform cover?';
    export let ques2='Which location does the platform cover?';
    export let ques3='How simple is it to use zoneomics?';
    export let ques4='Can I customize my payments?';
    export let ques5='What is your cancellation policy?';
    export let ans1 = 'Zoneomics provides national coverage on demand and is expanding coverage weekly. We can add any city within 7 days.';
    export let ans2 = 'More zoning data enables you to make better faster appraisal decisions. Stop visiting multiple city websites to find zoning maps. Easily access up-to-date permitted land uses, lot size, FAR, and building height of the property, all in one place.Understand the specific zoning of a property in any city in the U.S. Stop waiting in line at city zoning departments and battling through 2,000 pages of zone codes, and do your own zoning analysis with Zoneomics platform!';
    export let ans3 = 'Zoneomics is designed to be very user-friendly. Most users get up and running on their own and like to make use of our tutorials and documentation. Our Client Success team is responsive to answer questions and help you make the most out of Zoneomics.';
    export let ans4 = 'Most users pay annually to save money. Some people prefer the flexibility of paying monthly or using pay-as-you-go credits. If you require a customized package specific to your needs, reach out to our team, and we can search for options to help you maximize your potential using Zoneomics.';
    export let ans5 = 'ayment obligations for use of the Zoneomics Services are non-cancelable and Fees paid are non-refundable.';

let array = [
            {
                title: "Most Common Questions",
                questionList: [
                    {
                        /* question: "Which location does the platform cover?", */
                        question: ques1,
                        answer: ans1
                    },
                    {
                        question: ques2,
                        answer: ans2
                    },
                    {
                        question: ques3,
                        answer: ans3
                    }
                            ]
            },


            {
                title: "Billing Questions",
                questionList: [
                    {
                        question: ques4,
                        answer: ans4
                    },
                    {
                        question: ques5,
                        answer: ans5
                    }
                ]
            }
        ]
</script>

<FaqComp {array}
         {BgStyle} />
