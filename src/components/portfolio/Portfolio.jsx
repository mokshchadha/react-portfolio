import React from "react";
import { Github, ExternalLink } from "lucide-react";

const Portfolio = () => {
  const sections = {
    "Artificial Intelligence": {
      bgGradient: "bg-gradient-to-br from-emerald-50 to-emerald-100",
      borderColor: "border-emerald-200",
      titleColor: "text-emerald-800",
      linkColor: "text-emerald-700 hover:text-emerald-900",
      items: [
        {
          title: "Text to SQL Generator",
          description:
            "Natural language to SQL query converter working with 20+ database tables",
          repo: "",
          preview:""
        },
        {
          title: "Local RAG System",
          description:
            "Retrieval Augmented Generation using Ollama and TimescaleDB for efficient data retrieval and generation",
          repo: "mokshchadha/local_rag",
        },
        {
          title: "Invoice OCR with GenAI",
          description:
            "Intelligent invoice processing and data extraction using Generative AI",
          repo: "",
          preview:""
        },
        {
          title: "Video Summarizer",
          description:
            "Video content summarization using OpenAI Whisper for transcription and Gemini API for summary generation",
          repo: "mokshchadha/gemini_summariser",
          preview:"https://audiovideosummary.streamlit.app/"
        },
        {
          title: "Deterministic GenAI Output",
          description:
            "Framework for generating consistent outputs from GenAI models using LangChain agents",
          preview: "https://medium.com/@chadhamoksh/getting-structured-output-from-llms-using-react-agents-c84e9a777fbf",
        },
      ],
    },
    JavaScript: {
      bgGradient: "bg-gradient-to-br from-amber-50 to-amber-100",
      borderColor: "border-amber-200",
      titleColor: "text-amber-800",
      linkColor: "text-amber-700 hover:text-amber-900",
      items: [
        {
          title: "Block Em - Chrome Extension",
          description:
            "Block unwanted sites during work/study with custom video/webpage redirects",
          repo: "mokshchadha/blockEm",
          preview:
            "https://chrome.google.com/webstore/detail/blockem/gadendmijjdnlkeaoomkniibodipcdoa",
        },
        {
          title: "Maitri Yatra NGO Website",
          description: "Website for Himachal-based NGO built with Next.js",
          repo: "mokshchadha/raka_bui_ngo",
          preview: "https://maitriyatra.netlify.app/",
        },
        {
          title: "Angular SSR Grid",
          description:
            "Angular table package with debounced API search for all columns",
          repo: "mokshchadha/ng-ssr-grid",
        },
        {
          title: "Performance Monitor",
          description:
            "Real-time multi-core CPU monitoring using Node.js, React, and Socket.io with sticky sessions",
          repo: "mokshchadha/performance-monitor",
        },
        {
          title: "Sorting Visualizer",
          description: "React-based visualization tool for sorting algorithms",
          repo: "mokshchadha/sorting-visualizer",
          preview: "https://gallant-lovelace-64dc8c.netlify.app",
        },
        {
          title: "Inverted Index",
          description: "Cassandra table column indexing implementation",
          repo: "mokshchadha/inverted_index",
        },
      ],
    },
    Flutter: {
      bgGradient: "bg-gradient-to-br from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      titleColor: "text-blue-800",
      linkColor: "text-blue-700 hover:text-blue-900",
      items: [
        {
          title: "ArogyaGreen",
          description:
            "Pro bono initiative for Radha Swami Charitable Hospital - QR-based biowaste tracking using Flutter Web, Node.js, and MongoDB",
          preview: "https://arogyagreen.netlify.app/",
        },
        {
          title: "Google Docs Clone",
          description:
            "Real-time collaborative document editing with Flutter, Node.js, and Socket.io",
          repo: "mokshchadha/docs-clone",
          preview:"https://www.linkedin.com/feed/update/urn:li:activity:6995037982961352704/"
        },
        {
          title: "Serverpod Projects",
          description:
            "Full-stack Flutter solutions with Postgres and JSON RPC",
           repo:'mokshchadha/serverpod_demo'
        },
        {
          title: "Mobile Apps",
          subItems: [
            {
              title: "Expense Tracker",
              description: "Flutter app with Riverpod state management",
              repo: "mokshchadha/expense-tracker",
            },
            {
              title: "Grocery App",
              description: "MVVM architecture with Bloc state management",
              repo: "mokshchadha/grocery_bloc",
            },
          ],
        },
      ],
    },
    Rust: {
      bgGradient: "bg-gradient-to-br from-rose-50 to-rose-100",
      borderColor: "border-rose-200",
      titleColor: "text-rose-800",
      linkColor: "text-rose-700 hover:text-rose-900",
      items: [
        {
          title: "Weather App",
          description:
            "Reactive UI application using Rust Dominator and Arc signals",
          repo: "mokshchadha/weather_app",
        },
        {
          title: "Space Invaders",
          description: "CLI-based Galaga-style game",
          repo: "mokshchadha/space_invaders",
        },
        {
          title: "IP Sniffer",
          description: "Command-line IP sniffing tool",
          repo: "mokshchadha/ip_sniffer",
        },
        {
          title: "Dominator Components",
          description: "UI component library using Dominator v2",
          repo: "mokshchadha/dominator_rust",
        },
      ],
    },
    "Golang/Dart": {
      bgGradient: "bg-gradient-to-br from-sky-50 to-sky-100",
      borderColor: "border-sky-200",
      titleColor: "text-sky-800",
      linkColor: "text-sky-700 hover:text-sky-900",
      items: [
        {
          title: "Go banks",
          description: "Creating a backend api with golang, sqlx, mockito",
          repo: "mokshchadha/go_banks",
        },
        {
          title: "Go Simd",
          description: "Writing database UDF using golang",
          repo: "mokshchadha/go_simd",
        },
        {
          title: "Cassandra Client",
          description: "Database client implementation for Cassandra DB",
          repo: "mokshchadha/cassandra_client",
        },
        {
          title: "File DB",
          description:
            "File-based database with async writing and indexing capabilities",
          repo: "/mokshchadha/filedb",
        },
      ],
    },
    "Writing & Speaking": {
      bgGradient: "bg-gradient-to-br from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      titleColor: "text-purple-800",
      linkColor: "text-purple-700 hover:text-purple-900",
      items: [
        {
          title: "Guest Speaker - React Meetup Bangalore",
          description: "Topic: React Signals",
          preview:"https://www.linkedin.com/feed/update/urn:li:activity:7262060314966323200/"
        },
        {
          title: "Technical Articles",
          subItems: [
            {
              title: "Build Your Own Local LLM API with Ollama-js",
              description: "Step-by-Step Guide",
              preview: "https://blog.stackademic.com/build-your-own-local-llm-api-with-ollama-js-a-step-by-step-guide-fe9a576820b9",
            },
            {
              title: "Advanced RAG Techniques",
              description:
                "Comprehensive guide on Retrieval-Augmented Generation",
              preview: "https://medium.com/@chadhamoksh/advance-rag-techniques-162942bbd565",
            },
            {
              title: "Vector Databases Deep Dive",
              description:
                "What Are Vector Databases, and Why Are They a Hot Topic Right Now?",
              preview: "https://medium.com/@chadhamoksh/what-are-vector-databases-and-why-are-they-a-hot-topic-right-now-db3559e0312f",
            },
            {
              title: "Building Local RAG Apps",
              description:
                "Full stack implementation with PostgreSQL, Llama 3.2, and Ollama",
              preview: "https://medium.com/@chadhamoksh/build-a-fully-local-rag-app-with-postgresql-llama-3-2-and-ollama-b18cec13382d",
            },
          ],
        },
      ],
    },
  };

  return (
    <div
      id="portfolio"
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 p-4 bg-gray-50"
    >
      {Object.entries(sections).map(
        ([
          sectionName,
          { bgGradient, borderColor, titleColor, linkColor, items },
        ]) => (
          <div
            key={sectionName}
            className={`${bgGradient} rounded-lg p-3 space-y-2 shadow-lg border ${borderColor} 
            transform transition-all duration-300 hover:scale-102 hover:shadow-xl`}
          >
            <h2
              className={`text-lg font-bold ${titleColor} mb-2 border-b ${borderColor} pb-1`}
            >
              {sectionName}
            </h2>
            <div className="space-y-3">
              {items.map((item, index) => (
                <div key={index} className="group space-y-1">
                  <div className="flex items-start justify-between">
                    <h3
                      className={`${titleColor} font-semibold text-sm group-hover:translate-x-1 transition-transform duration-200`}
                    >
                      {item.title}
                    </h3>
                    <div className="flex space-x-1">
                      {item.repo && (
                        <a
                          href={`https://github.com/${item.repo}`}
                          className={`${linkColor} transform transition-all duration-200 hover:scale-110`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {item.preview && (
                        <a
                          href={`${item.preview}`}
                          className={`${linkColor} transform transition-all duration-200 hover:scale-110`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  {item.description && (
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  )}
                  {item.subItems && (
                    <ul className="space-y-2 mt-2">
                      {item.subItems.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className={`group/item pl-2 border-l-2 ${borderColor}`}
                        >
                          {typeof subItem === "string" ? (
                            <p className="text-gray-600 text-xs">{subItem}</p>
                          ) : (
                            <div className="space-y-0.5">
                              <div className="flex items-center justify-between">
                                <span
                                  className={`${titleColor} font-medium text-xs`}
                                >
                                  {subItem.title}
                                </span>
                                {subItem.repo && (
                                  <a
                                    href={`https://github.com/${subItem.repo}`}
                                    className={`${linkColor} opacity-90 group-hover/item:opacity-100 transition-opacity duration-200`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <Github className="w-3 h-3" />
                                  </a>
                                )}
                                {subItem.preview && (
                                  <a
                                    href={`${item.preview}`}
                                    className={`${linkColor} transform transition-all duration-200 hover:scale-110`}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <ExternalLink className="w-4 h-4" />
                                  </a>
                                )}
                              </div>
                              {subItem.description && (
                                <p className="text-gray-600 text-xs">
                                  {subItem.description}
                                </p>
                              )}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Portfolio;
