import type { Endorsement } from "$lib/types";
import {items as experience_items} from './experience';

import Assets from "./assets";

export const items: Array<Endorsement> = [
    {
        person: "Hemant Rathod",
        organization: experience_items.find(item => item.slug === 'lti')!,
        role: "Specialist, Product Engineering",
        relation:"Immediate Reporting Manager",
        endorsement: "I highly recommend Taha Bhagat, a strong data engineer and fullstack developer at LTIMindtree, especially for his contributions to the Blueverse AIOps platform. He played a key role in designing and delivering both streaming and batch data pipelines for large-scale IT operations data using Apache Spark and Kafka in production environments. Taha owned core platform pipeline workflows, from real-time ingestion and transformation to optimized joins and downstream storage in SQL and NoSQL systems. His work directly improved performance, reliability, and observability across the platform. He also contributed to the development of a low-code data pipeline builder that accelerated integrations for engineers and analysts. Taha is technically solid, a fast learner and excellent debugger — a strong asset to any organization.",
        period: { from: new Date(2023,6,27), to: new Date(2026,1,9) },
        link: {
            to:"https://www.linkedin.com/in/hemantrathod93/",
            label:"LinkedIn",
            newTab:true
        },
        profileImage: Assets.RathodH
    }
];

export const title = 'Endorsements';