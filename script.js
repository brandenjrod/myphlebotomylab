const tubeData = [
  {
    order: 1,
    orderLabel: "1st",
    tube: "Blood Culture",
    tests: ["Bacterial"],
    inversion: "8x-10x",
    department: "Microbiology",
    additives: ["Anaerobic", "Aerobic"],
    additiveDisplay: "Anaerobic AND Aerobic",
    tubeColor: "white",
    aliases: ["Blood Culture", "White"]
  },
  {
    order: 2,
    orderLabel: "2nd",
    tube: "Red (Waste)",
    tests: ["N/A"],
    inversion: "N/A",
    department: "Chemistry",
    additives: ["N/A"],
    additiveDisplay: "N/A",
    tubeColor: "#c83939",
    aliases: ["Red", "Waste", "Red (Waste)"]
  },
  {
    order: 3,
    orderLabel: "3rd",
    tube: "Light Blue",
    tests: ["PT", "PTT", "INR", "D-Dimer", "Heparin", "Fibrinogen"],
    inversion: "3x-4x",
    department: "Coagulation",
    additives: ["Sodium Citrate"],
    additiveDisplay: "Sodium Citrate",
    tubeColor: "#95d7ff",
    aliases: ["Light Blue", "Blue"]
  },
  {
    order: 4,
    orderLabel: "4th",
    tube: "SST (Red, Gold, Tiger)",
    tests: ["Copper", "Thyroid", "Rheumatoid factor", "Serologic Syphilis panel"],
    inversion: "5x",
    department: "Chemistry",
    additives: ["None", "Clot Activator"],
    additiveDisplay: "None OR Clot Activator",
    tubeColor: "sst",
    aliases: ["SST", "Red, Gold, Tiger", "Tiger"]
  },
  {
    order: 5,
    orderLabel: "5th",
    tube: "Orange",
    tests: ["Copper", "Thyroid", "Rheumatoid factor", "Serologic Syphilis panel"],
    inversion: "5x",
    department: "Chemistry",
    additives: ["Thrombin"],
    additiveDisplay: "Thrombin",
    tubeColor: "#ff9a2e",
    aliases: ["Orange"]
  },
  {
    order: 6,
    orderLabel: "6th",
    tube: "Light Green",
    tests: [
      "Ammonia",
      "Ferritin-Iron",
      "Cardiac Enzymes-CPK CPKMB/Troponin",
      "Renal Function PANEL: (BMP / Protein / albumin)",
      "Lipid Panel: (Total Cholesterol / Triglyceride / HDL / LDL)",
      "Electrolytes",
      "BMP/CMP PANEL: (Na / K / Cl / CO2 / Glucose / BUN / Creatinine / Ca / Albumin / Bilirubin / Alkaline Phosphatase / ALT/SGPT / AST/SGOT)"
    ],
    inversion: "8x-10x",
    department: "Chemistry",
    additives: ["Lithium Heparin"],
    additiveDisplay: "Lithium Heparin",
    tubeColor: "#7ce679",
    aliases: ["Light Green"]
  },
  {
    order: 7,
    orderLabel: "7th",
    tube: "Dark Green",
    tests: [
      "Ammonia",
      "Ferritin-Iron",
      "Cardiac Enzymes-CPK CPKMB/Troponin",
      "Renal Function PANEL: (BMP / Protein / albumin)",
      "Lipid Panel: (Total Cholesterol / Triglyceride / HDL / LDL)",
      "Electrolytes",
      "BMP/CMP PANEL: (Na / K / Cl / CO2 / Glucose / BUN / Creatinine / Ca / Albumin / Bilirubin / Alkaline Phosphatase / ALT/SGPT / AST/SGOT)"
    ],
    inversion: "8x-10x",
    department: "Chemistry",
    additives: ["Sodium Heparin"],
    additiveDisplay: "Sodium Heparin",
    tubeColor: "#258b43",
    aliases: ["Dark Green"]
  },
  {
    order: 8,
    orderLabel: "8th",
    tube: "Lavender / Purple",
    tests: ["Hemaglobin/Hematocrit", "Hemoglobin A1C", "Platelet Count", "Reticulocyte Count", "CBC with & without Differential", "B-NP"],
    inversion: "8x-10x",
    department: "Hematology",
    additives: ["EDTA"],
    additiveDisplay: "EDTA",
    tubeColor: "#b089ff",
    aliases: ["Lavender", "Purple", "Lavender / Purple"]
  },
  {
    order: 9,
    orderLabel: "9th",
    tube: "Pink",
    tests: ["Blood Bank Collections"],
    inversion: "8x-10x",
    department: "Blood Bank",
    additives: ["EDTA"],
    additiveDisplay: "EDTA",
    tubeColor: "#ff8db8",
    aliases: ["Pink"]
  },
  {
    order: 10,
    orderLabel: "10th",
    tube: "Royal Blue",
    tests: ["Metals"],
    inversion: "0x (DO NOT INVERT)",
    department: "Sendout",
    additives: ["EDTA"],
    additiveDisplay: "EDTA",
    tubeColor: "#4c7dff",
    aliases: ["Royal Blue", "Blue"]
  },
  {
    order: 11,
    orderLabel: "11th",
    tube: "Gray",
    tests: ["Glucose", "Blood Alcohol Collections", "Lactate (Transport on Ice)"],
    inversion: "8x-10x",
    department: "Chemistry",
    additives: ["Sodium Fluoride", "Potassium Oxalate"],
    additiveDisplay: "Sodium Fluoride AND Potassium Oxalate",
    tubeColor: "#9e9e9e",
    aliases: ["Gray", "Grey"]
  },
  {
    order: 12,
    orderLabel: "12th",
    tube: "Light Yellow",
    tests: ["DNA Studies", "Glucose", "Paternity Testing", "HCG", "Intact PTH", "PSA"],
    inversion: "5x",
    department: "Sendout",
    additives: ["Acid Citrate Dextrose (ACD)"],
    additiveDisplay: "Acid Citrate Dextrose (ACD)",
    tubeColor: "#fff59e",
    aliases: ["Light Yellow", "Yellow"]
  }
];

const categoryConfig = [
  { key: "order", label: "Order" },
  { key: "tube", label: "Tube" },
  { key: "test", label: "Test" },
  { key: "inversion", label: "Inversion Amount" },
  { key: "department", label: "Department" },
  { key: "additive", label: "Additive" }
];

const state = {
  activeMode: "matching",
  matching: {
    activeCategory: "order",
    slots: [],
    cardBank: {},
    cardMeta: new Map(),
    usedCards: new Set(),
    selectedCardId: null,
    draggingCardId: null
  },
  scenario: {
    rounds: [],
    currentIndex: 0,
    solvedCount: 0,
    responses: []
  },
  quiz: {
    questions: [],
    currentIndex: 0,
    answers: {},
    submitted: false
  }
};

const elements = {
  chart: document.querySelector("#referenceChart"),
  toggleChart: document.querySelector("#toggleChart"),
  modeCards: document.querySelectorAll(".mode-card"),
  modePanels: {
    matching: document.querySelector("#matchingMode"),
    scenario: document.querySelector("#scenarioMode"),
    quiz: document.querySelector("#quizMode")
  },
  matchingSlots: document.querySelector("#matchingSlots"),
  bankTabs: document.querySelector("#bankTabs"),
  bankCards: document.querySelector("#bankCards"),
  matchingMessage: document.querySelector("#matchingMessage"),
  matchingProgress: document.querySelector("#matchingProgress"),
  matchingMistakes: document.querySelector("#matchingMistakes"),
  submitMatching: document.querySelector("#submitMatching"),
  resetMatching: document.querySelector("#resetMatching"),
  scenarioPrompt: document.querySelector("#scenarioPrompt"),
  scenarioHint: document.querySelector("#scenarioHint"),
  scenarioWorkspace: document.querySelector("#scenarioWorkspace"),
  scenarioMessage: document.querySelector("#scenarioMessage"),
  checkScenario: document.querySelector("#checkScenario"),
  nextScenario: document.querySelector("#nextScenario"),
  newScenarioSet: document.querySelector("#newScenarioSet"),
  scenarioCounter: document.querySelector("#scenarioCounter"),
  scenarioCompleted: document.querySelector("#scenarioCompleted"),
  quizPrompt: document.querySelector("#quizPrompt"),
  quizOptions: document.querySelector("#quizOptions"),
  quizMessage: document.querySelector("#quizMessage"),
  quizQuestionCounter: document.querySelector("#quizQuestionCounter"),
  quizAnsweredCounter: document.querySelector("#quizAnsweredCounter"),
  nextQuizQuestion: document.querySelector("#nextQuizQuestion"),
  submitQuiz: document.querySelector("#submitQuiz"),
  retryQuiz: document.querySelector("#retryQuiz"),
  quizResults: document.querySelector("#quizResults")
};

function shuffle(items) {
  const cloned = [...items];
  for (let index = cloned.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [cloned[index], cloned[swapIndex]] = [cloned[swapIndex], cloned[index]];
  }
  return cloned;
}

function unique(items) {
  return [...new Set(items)];
}

function sample(items, count = 1) {
  return shuffle(items).slice(0, count);
}

function getTubeVisual(tube) {
  if (tube.tubeColor === "sst") {
    return `<span class="tube-dot tube-sst" aria-hidden="true"></span>`;
  }
  return `<span class="tube-dot" aria-hidden="true" style="background:${tube.tubeColor}"></span>`;
}

function getBlankTubeVisual() {
  return `<span class="tube-dot tube-dot-blank" aria-hidden="true"></span>`;
}

function normalizeTestList(tube) {
  return tube.tests.map((test) => ({ test, tube }));
}

function setMessage(element, message, tone) {
  element.textContent = message;
  element.className = `message-box ${tone}`;
}

function buildReferenceChart() {
  elements.chart.innerHTML = tubeData.map((tube) => `
    <article class="chart-row">
      <header>
        <div class="tube-chip">${getTubeVisual(tube)} <strong>${tube.orderLabel}: ${tube.tube}</strong></div>
        <span class="pill">${tube.department}</span>
      </header>
      <ul>
        <li><strong>Tests:</strong> ${tube.tests.join(", ")}</li>
        <li><strong>Additive:</strong> ${tube.additiveDisplay}</li>
        <li><strong>Inversion:</strong> ${tube.inversion}</li>
      </ul>
    </article>
  `).join("");
}

function toggleChart() {
  const hidden = elements.chart.classList.toggle("hidden");
  elements.toggleChart.textContent = hidden ? "Show Chart" : "Hide Chart";
}

function setupModeSwitching() {
  elements.modeCards.forEach((card) => {
    card.addEventListener("click", () => {
      const mode = card.dataset.mode;
      state.activeMode = mode;
      elements.modeCards.forEach((item) => item.classList.toggle("active", item === card));
      Object.entries(elements.modePanels).forEach(([key, panel]) => {
        panel.classList.toggle("active", key === mode);
      });
    });
  });
}

function makeCardId(category, value, copyIndex) {
  return `${category}:${copyIndex}:${value}`;
}

function getFieldDisplay(category, tube) {
  if (category === "order") {
    return tube.orderLabel;
  }
  if (category === "tube") {
    return tube.tube;
  }
  if (category === "test") {
    return tube.tests.join(", ");
  }
  if (category === "inversion") {
    return tube.inversion;
  }
  if (category === "department") {
    return tube.department;
  }
  return tube.additiveDisplay;
}

function renderBankCardContent(card) {
  if (card.category === "tube") {
    const tube = tubeData.find((item) => item.tube === card.value);
    return `
      <div class="tube-chip">${getTubeVisual(tube)} <strong>${card.label}</strong></div>
      <small>${card.category.toUpperCase()}</small>
    `;
  }
  return `
    <strong>${card.label}</strong>
    <small>${card.category.toUpperCase()}</small>
  `;
}

function buildMatchingState() {
  state.matching.slots = Array.from({ length: tubeData.length }, (_, index) => ({
    slotId: index + 1,
    assigned: {
      order: null,
      tube: null,
      test: null,
      inversion: null,
      department: null,
      additive: null
    },
    status: "idle"
  }));

  const bank = {
    order: [],
    tube: [],
    test: [],
    inversion: [],
    department: [],
    additive: []
  };
  const meta = new Map();
  const groupedCounts = {
    order: new Map(),
    tube: new Map(),
    test: new Map(),
    inversion: new Map(),
    department: new Map(),
    additive: new Map()
  };

  tubeData.forEach((tube) => {
    categoryConfig.forEach((category) => {
      const value = getFieldDisplay(category.key, tube);
      groupedCounts[category.key].set(value, (groupedCounts[category.key].get(value) || 0) + 1);
    });
  });

  Object.entries(groupedCounts).forEach(([categoryKey, counts]) => {
    [...counts.entries()].forEach(([value, quantity]) => {
      Array.from({ length: quantity }, (_, copyIndex) => {
        const id = makeCardId(categoryKey, value, copyIndex + 1);
        const card = {
          id,
          category: categoryKey,
          value,
          label: value
        };
        bank[categoryKey].push(card);
        meta.set(id, card);
        return card;
      });
    });
  });

  state.matching.cardBank = Object.fromEntries(
    Object.entries(bank).map(([key, cards]) => [key, shuffle(cards)])
  );
  state.matching.cardMeta = meta;
  state.matching.usedCards = new Set();
  state.matching.activeCategory = "order";
  state.matching.selectedCardId = null;
  state.matching.draggingCardId = null;
}

function renderMatchingTabs() {
  elements.bankTabs.innerHTML = categoryConfig.map((category) => `
    <button class="bank-tab ${category.key === state.matching.activeCategory ? "active" : ""}" data-category="${category.key}" type="button">
      ${category.label}
    </button>
  `).join("");

  elements.bankTabs.querySelectorAll(".bank-tab").forEach((button) => {
    button.addEventListener("click", () => {
      state.matching.activeCategory = button.dataset.category;
      renderMatchingTabs();
      renderMatchingCards();
    });
  });
}

function renderMatchingCards() {
  const cards = state.matching.cardBank[state.matching.activeCategory];
  elements.bankCards.innerHTML = cards.map((card) => {
    const isUsed = state.matching.usedCards.has(card.id);
    const isSelected = state.matching.selectedCardId === card.id;
    return `
      <article
        class="card-item ${isUsed ? "used" : ""} ${isSelected ? "selected" : ""}"
        draggable="${isUsed ? "false" : "true"}"
        data-card-id="${card.id}"
      >
        ${renderBankCardContent(card)}
      </article>
    `;
  }).join("");

  elements.bankCards.querySelectorAll(".card-item").forEach((cardEl) => {
    if (cardEl.classList.contains("used")) {
      return;
    }
    cardEl.addEventListener("dragstart", (event) => {
      state.matching.draggingCardId = cardEl.dataset.cardId;
      event.dataTransfer.setData("text/plain", cardEl.dataset.cardId);
    });
    cardEl.addEventListener("dragend", () => {
      state.matching.draggingCardId = null;
    });
    cardEl.addEventListener("click", () => {
      state.matching.selectedCardId = state.matching.selectedCardId === cardEl.dataset.cardId ? null : cardEl.dataset.cardId;
      renderMatchingCards();
      setMessage(elements.matchingMessage, "Card selected. Tap a matching field to place it, or drag it on desktop.", "info");
    });
  });
}

function updateMatchingStatus() {
  const filledCount = state.matching.slots.filter((slot) =>
    categoryConfig.every((category) => Boolean(slot.assigned[category.key]))
  ).length;
  elements.matchingProgress.textContent = `${filledCount} / 12`;
}

function renderMatchingSlots() {
  elements.matchingSlots.innerHTML = state.matching.slots.map((slot) => {
    const assignedTube = slot.assigned.tube ? tubeData.find((item) => item.tube === slot.assigned.tube.value) : null;
    return `
      <article class="tube-slot" data-slot-id="${slot.slotId}" data-state="${slot.status}">
        <h4>
          <span class="tube-chip">${assignedTube ? getTubeVisual(assignedTube) : getBlankTubeVisual()} Order Slot ${slot.slotId}</span>
          <span class="token">${assignedTube ? "Tube Added" : "Waiting"}</span>
        </h4>
        <div class="field-list">
          ${categoryConfig.map((category) => {
            const value = slot.assigned[category.key];
            return `
              <div>
                <div class="field-label">${category.label}</div>
                <div class="drop-field ${value ? "filled" : ""}" data-slot-id="${slot.slotId}" data-category="${category.key}">
                  <span class="drop-value">${value ? value.label : "Drop card here"}</span>
                  ${value ? `<button class="clear-drop" type="button" data-card-id="${value.id}" data-slot-id="${slot.slotId}" data-category="${category.key}">Clear</button>` : ""}
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </article>
    `;
  }).join("");

  elements.matchingSlots.querySelectorAll(".drop-field").forEach((field) => {
    field.addEventListener("dragover", (event) => {
      const cardId = state.matching.draggingCardId || event.dataTransfer.getData("text/plain");
      const card = state.matching.cardMeta.get(cardId);
      if (card && card.category === field.dataset.category) {
        event.preventDefault();
        field.classList.add("over");
      }
    });

    field.addEventListener("dragleave", () => field.classList.remove("over"));

    field.addEventListener("drop", (event) => {
      event.preventDefault();
      field.classList.remove("over");
      const cardId = event.dataTransfer.getData("text/plain") || state.matching.draggingCardId;
      assignMatchingCard(Number(field.dataset.slotId), field.dataset.category, cardId);
      state.matching.draggingCardId = null;
    });

    field.addEventListener("click", () => {
      if (!state.matching.selectedCardId) {
        return;
      }
      assignMatchingCard(Number(field.dataset.slotId), field.dataset.category, state.matching.selectedCardId);
    });
  });

  elements.matchingSlots.querySelectorAll(".clear-drop").forEach((button) => {
    button.addEventListener("click", () => {
      clearMatchingCard(Number(button.dataset.slotId), button.dataset.category);
    });
  });

  updateMatchingStatus();
}

function assignMatchingCard(slotId, category, cardId) {
  const slot = state.matching.slots.find((item) => item.slotId === slotId);
  const card = state.matching.cardMeta.get(cardId);
  if (!slot || !card || card.category !== category || state.matching.usedCards.has(cardId)) {
    return;
  }

  if (slot.assigned[category]) {
    state.matching.usedCards.delete(slot.assigned[category].id);
  }

  slot.assigned[category] = card;
  slot.status = "idle";
  state.matching.usedCards.add(card.id);
  state.matching.selectedCardId = null;
  setMessage(elements.matchingMessage, `Placed ${card.label} into ${category}. Keep building the tube.`, "info");
  renderMatchingCards();
  renderMatchingSlots();
}

function clearMatchingCard(slotId, category) {
  const slot = state.matching.slots.find((item) => item.slotId === slotId);
  if (!slot || !slot.assigned[category]) {
    return;
  }

  state.matching.usedCards.delete(slot.assigned[category].id);
  slot.assigned[category] = null;
  slot.status = "idle";
  state.matching.selectedCardId = null;
  renderMatchingCards();
  renderMatchingSlots();
}

function evaluateMatching() {
  let wrongSelections = 0;
  let completed = 0;
  const slotAnalysis = [];

  state.matching.slots.forEach((slot) => {
    const expectedTube = tubeData.find((tube) => tube.order === slot.slotId);
    const assignedCards = categoryConfig
      .map((category) => slot.assigned[category.key])
      .filter(Boolean);
    const expectedByCategory = Object.fromEntries(
      categoryConfig.map((category) => [category.key, getFieldDisplay(category.key, expectedTube)])
    );
    let totalWrong = 0;

    categoryConfig.forEach((category) => {
      const assigned = slot.assigned[category.key];
      if (!assigned) {
        totalWrong += 1;
        return;
      }
      if (assigned.value !== expectedByCategory[category.key]) {
        totalWrong += 1;
      }
    });

    slotAnalysis.push({
      slot,
      expectedOrder: expectedTube.order,
      isComplete: assignedCards.length === categoryConfig.length,
      totalWrong
    });
  });

  const completedOrders = slotAnalysis
    .filter((analysis) => analysis.isComplete && analysis.totalWrong === 0)
    .map((analysis) => analysis.expectedOrder);
  const duplicateOrders = new Set(
    completedOrders.filter((order, index) => completedOrders.indexOf(order) !== index)
  );

  slotAnalysis.forEach((analysis) => {
    const { slot, expectedOrder } = analysis;
    let slotWrong = analysis.totalWrong;

    if (analysis.isComplete && analysis.totalWrong === 0 && !duplicateOrders.has(expectedOrder)) {
      slot.status = "correct";
      completed += 1;
      return;
    }

    if (duplicateOrders.has(expectedOrder)) {
      slotWrong += 1;
    }

    wrongSelections += slotWrong;
    slot.status = "warning";
    if (slotWrong >= 3) {
      categoryConfig.forEach((category) => {
        if (slot.assigned[category.key]) {
          state.matching.usedCards.delete(slot.assigned[category.key].id);
          slot.assigned[category.key] = null;
        }
      });
    }
  });

  elements.matchingMistakes.textContent = String(wrongSelections);
  renderMatchingCards();
  renderMatchingSlots();

  if (completed === tubeData.length) {
    setMessage(elements.matchingMessage, "Perfect run. Every tube is filled and ordered correctly.", "success");
    return;
  }

  if (wrongSelections === 0) {
    setMessage(elements.matchingMessage, "Nice work. Every filled selection is correct so far.", "success");
    return;
  }

  setMessage(
    elements.matchingMessage,
    `${wrongSelections} selection${wrongSelections === 1 ? "" : "s"} missed. Any tube with 3 or more wrong fields was reset for another try.`,
    "error"
  );
}

function resetMatchingGame() {
  buildMatchingState();
  renderMatchingTabs();
  renderMatchingCards();
  renderMatchingSlots();
  elements.matchingMistakes.textContent = "0";
  setMessage(elements.matchingMessage, "Fresh matching round loaded. Drag cards into each ordered tube slot.", "info");
}

function getScenarioTestPool() {
  const testMap = new Map();

  tubeData.forEach((tube) => {
    tube.tests.forEach((test) => {
      if (test === "N/A") {
        return;
      }
      if (!testMap.has(test)) {
        testMap.set(test, []);
      }
      testMap.get(test).push(tube);
    });
  });

  return [...testMap.entries()].map(([test, candidates]) => ({
    test,
    candidates: [...candidates].sort((left, right) => left.order - right.order),
    candidateSignature: candidates.map((tube) => tube.order).sort((left, right) => left - right).join("|")
  }));
}

function getScenarioTubeOptions() {
  return tubeData.map((tube) => `<option value="${tube.order}">${tube.orderLabel} - ${tube.tube}</option>`).join("");
}

function getScenarioAdditiveOptions() {
  return unique(
    tubeData.flatMap((tube) => [tube.additiveDisplay, ...tube.additives])
  ).map((additive) => `<option value="${additive}">${additive}</option>`).join("");
}

function buildScenarioRounds() {
  const allTests = getScenarioTestPool();
  const rounds = [];

  while (rounds.length < 10) {
    const desiredCount = Math.random() < 0.45 ? 1 : (Math.random() < 0.8 ? 2 : 3);
    const selected = [];
    const usedGroups = new Set();

    shuffle(allTests).forEach((entry) => {
      if (selected.length >= desiredCount) {
        return;
      }
      if (usedGroups.has(entry.candidateSignature)) {
        return;
      }
      selected.push(entry);
      usedGroups.add(entry.candidateSignature);
    });

    const signature = selected.map((item) => `${item.test}:${item.candidateSignature}`).sort().join("|");
    if (rounds.some((round) => round.signature === signature)) {
      continue;
    }

    rounds.push({
      signature,
      testsOrdered: [...selected].sort((left, right) => {
        const leftMin = Math.min(...left.candidates.map((tube) => tube.order));
        const rightMin = Math.min(...right.candidates.map((tube) => tube.order));
        return leftMin - rightMin;
      }),
      prompt: selected.map((item) => item.test).join(" , "),
      solved: false
    });
  }

  state.scenario.rounds = rounds;
  state.scenario.currentIndex = 0;
  state.scenario.solvedCount = 0;
  state.scenario.responses = [{ tubeOrder: "", additive: "", inversion: "", department: "" }];
}

function getScenarioRound() {
  return state.scenario.rounds[state.scenario.currentIndex];
}

function renderScenario() {
  const round = getScenarioRound();
  if (!round) {
    return;
  }

  elements.scenarioCounter.textContent = `${state.scenario.currentIndex + 1} / 10`;
  elements.scenarioCompleted.textContent = String(state.scenario.solvedCount);
  elements.scenarioPrompt.textContent = `Tests: ${round.prompt}`;
  elements.scenarioHint.textContent = "Start with one blank tube, add more only if the test order needs them, then set the additive, inversion amount, and department for each tube.";

  const orderOptions = getScenarioTubeOptions();
  const additiveOptions = getScenarioAdditiveOptions();
  const inversionOptions = unique(tubeData.map((tube) => tube.inversion)).map((inversion) => `<option value="${inversion}">${inversion}</option>`).join("");
  const departmentOptions = unique(tubeData.map((tube) => tube.department)).map((department) => `<option value="${department}">${department}</option>`).join("");

  elements.scenarioWorkspace.innerHTML = `
    <div class="scenario-builder-controls">
      <button id="addScenarioTube" class="secondary-button" type="button">Add Tube</button>
      <button id="removeScenarioTube" class="ghost-button" type="button" ${state.scenario.responses.length === 1 ? "disabled" : ""}>Remove Last Tube</button>
    </div>
    ${state.scenario.responses.map((response, index) => `
      <section class="scenario-tube">
        <div class="tube-chip">${response.tubeOrder ? getTubeVisual(tubeData.find((tube) => tube.order === Number(response.tubeOrder))) : getBlankTubeVisual()} <h4>Tube ${index + 1}</h4></div>
        <p>Choose the tube, then complete its required details in draw order.</p>
        <div class="scenario-grid">
          <label>
            Tube
            <select data-role="tube-order" data-index="${index}">
              <option value="">Blank tube</option>
              ${orderOptions}
            </select>
          </label>
          <label>
            Additive
            <select data-role="additive" data-index="${index}">
              <option value="">Select additive</option>
              ${additiveOptions}
            </select>
          </label>
          <label>
            Inversion Amount
            <select data-role="inversion" data-index="${index}">
              <option value="">Select inversion</option>
              ${inversionOptions}
            </select>
          </label>
          <label>
            Department
            <select data-role="department" data-index="${index}">
              <option value="">Select department</option>
              ${departmentOptions}
            </select>
          </label>
        </div>
      </section>
    `).join("")}
  `;

  state.scenario.responses.forEach((response, index) => {
    elements.scenarioWorkspace.querySelector(`[data-role="tube-order"][data-index="${index}"]`).value = response.tubeOrder;
    elements.scenarioWorkspace.querySelector(`[data-role="additive"][data-index="${index}"]`).value = response.additive;
    elements.scenarioWorkspace.querySelector(`[data-role="inversion"][data-index="${index}"]`).value = response.inversion;
    elements.scenarioWorkspace.querySelector(`[data-role="department"][data-index="${index}"]`).value = response.department;
  });

  elements.scenarioWorkspace.querySelectorAll("select").forEach((select) => {
    select.addEventListener("change", () => {
      const index = Number(select.dataset.index);
      const role = select.dataset.role;
      state.scenario.responses[index][role === "tube-order" ? "tubeOrder" : role] = select.value;
      if (role === "tube-order") {
        renderScenario();
      }
    });
  });

  elements.scenarioWorkspace.querySelector("#addScenarioTube").addEventListener("click", () => {
    state.scenario.responses.push({ tubeOrder: "", additive: "", inversion: "", department: "" });
    renderScenario();
  });

  elements.scenarioWorkspace.querySelector("#removeScenarioTube").addEventListener("click", () => {
    if (state.scenario.responses.length > 1) {
      state.scenario.responses.pop();
      renderScenario();
    }
  });

  elements.nextScenario.disabled = true;
  setMessage(elements.scenarioMessage, "Scenario ready. Solve every variable correctly to unlock the next case.", "info");
}

function checkScenario() {
  const round = getScenarioRound();
  if (!round) {
    return;
  }

  const selectedForms = state.scenario.responses.filter((response) => response.tubeOrder);
  const selectedTubes = selectedForms.map((response) => tubeData.find((tube) => tube.order === Number(response.tubeOrder)));
  const expectedCount = round.testsOrdered.length;
  const expectedGroups = new Set(round.testsOrdered.map((entry) => entry.candidateSignature));
  const errors = [];

  if (selectedForms.length !== expectedCount) {
    errors.push(`This scenario needs ${expectedCount} tube${expectedCount === 1 ? "" : "s"}. Add or remove tubes before checking.`);
  }

  if (selectedTubes.some((tube) => !tube)) {
    errors.push("Each added tube must have a tube color selected.");
  }

  const selectedOrders = selectedTubes.filter(Boolean).map((tube) => tube.order);
  const sortedSelectedOrders = [...selectedOrders].sort((left, right) => left - right);
  if (selectedOrders.length && selectedOrders.join("|") !== sortedSelectedOrders.join("|")) {
    errors.push("Your tubes are not in the correct draw order.");
  }

  const matchedGroups = new Set();
  selectedTubes.forEach((tube) => {
    if (!tube) {
      return;
    }
    const match = round.testsOrdered.find((entry) =>
      entry.candidates.some((candidate) => candidate.order === tube.order) && !matchedGroups.has(entry.candidateSignature)
    );
    if (!match) {
      errors.push(`${tube.tube} is not needed for this scenario.`);
      return;
    }
    matchedGroups.add(match.candidateSignature);
  });

  if (matchedGroups.size !== expectedGroups.size) {
    errors.push("The selected tubes do not cover every ordered test in the scenario.");
  }

  selectedForms.forEach((response, index) => {
    const selectedTube = selectedTubes[index];
    if (!selectedTube) {
      return;
    }
    if (!response.additive || (response.additive !== selectedTube.additiveDisplay && !selectedTube.additives.includes(response.additive))) {
      errors.push(`The additive for ${selectedTube.tube} is incorrect.`);
    }
    if (!response.inversion || response.inversion !== selectedTube.inversion) {
      errors.push(`The inversion amount for ${selectedTube.tube} is incorrect.`);
    }
    if (!response.department || response.department !== selectedTube.department) {
      errors.push(`The department for ${selectedTube.tube} is incorrect.`);
    }
  });

  if (errors.length === 0) {
    if (!round.solved) {
      round.solved = true;
      state.scenario.solvedCount += 1;
    }
    elements.scenarioCompleted.textContent = String(state.scenario.solvedCount);
    elements.nextScenario.disabled = false;
    setMessage(elements.scenarioMessage, "Scenario solved. Every tube, additive, inversion amount, and department is correct.", "success");
    markScenarioCorrect(round);
    return;
  }

  setMessage(elements.scenarioMessage, errors.slice(0, 4).join(" "), "error");
}

function markScenarioCorrect(round) {
  const sections = [...elements.scenarioWorkspace.querySelectorAll(".scenario-tube")];
  sections.forEach((section, index) => {
    if (round.testsOrdered[index]) {
      section.classList.add("correct");
    }
  });
}

function nextScenario() {
  if (state.scenario.currentIndex >= state.scenario.rounds.length - 1) {
    setMessage(elements.scenarioMessage, "You cleared all 10 scenarios. Start a fresh set for a new run.", "success");
    elements.nextScenario.disabled = true;
    return;
  }

  state.scenario.currentIndex += 1;
  state.scenario.responses = [{ tubeOrder: "", additive: "", inversion: "", department: "" }];
  renderScenario();
}

function resetScenarioGame() {
  buildScenarioRounds();
  renderScenario();
}

function getAllTests() {
  return unique(tubeData.flatMap((tube) => tube.tests));
}

function getAllAdditives() {
  return unique(tubeData.flatMap((tube) => tube.additives));
}

function getGroupedTestAdditives(testName) {
  const entry = getScenarioTestPool().find((item) => item.test === testName);
  if (!entry) {
    return null;
  }
  const additiveDisplays = unique(entry.candidates.map((tube) => tube.additiveDisplay));
  return {
    test: entry.test,
    candidates: entry.candidates,
    answer: additiveDisplays.join(" AND ")
  };
}

function buildOptions(correctAnswer, pool, desiredCount) {
  const incorrect = shuffle(unique(pool.filter((item) => item !== correctAnswer))).slice(0, Math.max(desiredCount - 1, 0));
  return shuffle(unique([correctAnswer, ...incorrect])).slice(0, desiredCount);
}

function makeQuizQuestion(type) {
  if (type === "additive") {
    const tube = sample(tubeData)[0];
    return {
      prompt: `What additive goes with ${tube.tube}?`,
      correctAnswer: tube.additiveDisplay,
      options: buildOptions(tube.additiveDisplay, getAllAdditives().concat(tubeData.map((item) => item.additiveDisplay)), 4)
    };
  }

  if (type === "na") {
    return {
      prompt: "What tube has no test and no inversion amount?",
      correctAnswer: "Red (Waste)",
      options: buildOptions("Red (Waste)", tubeData.map((tube) => tube.tube), 4)
    };
  }

  if (type === "not-test") {
    const tube = sample(tubeData.filter((item) => item.tests[0] !== "N/A"))[0];
    const incorrect = sample(getAllTests().filter((test) => !tube.tests.includes(test) && test !== "N/A"), 1)[0];
    return {
      prompt: `Which of these does ${tube.tube} NOT test for?`,
      correctAnswer: incorrect,
      options: shuffle([incorrect, ...sample(tube.tests, Math.min(3, tube.tests.length))])
    };
  }

  if (type === "department") {
    const tube = sample(tubeData)[0];
    return {
      prompt: `Which department handles ${tube.tube}?`,
      correctAnswer: tube.department,
      options: buildOptions(tube.department, unique(tubeData.map((item) => item.department)), 4)
    };
  }

  if (type === "inversion") {
    const tube = sample(tubeData)[0];
    return {
      prompt: `How many inversions does ${tube.tube} require?`,
      correctAnswer: tube.inversion,
      options: buildOptions(tube.inversion, unique(tubeData.map((item) => item.inversion)), 4)
    };
  }

  if (type === "test-to-tube") {
    const pair = sample(tubeData.flatMap(normalizeTestList).filter((entry) => entry.test !== "N/A"))[0];
    return {
      prompt: `Which tube is used for ${pair.test}?`,
      correctAnswer: pair.tube.tube,
      options: buildOptions(pair.tube.tube, tubeData.map((tube) => tube.tube), 4)
    };
  }

  if (type === "order") {
    const tube = sample(tubeData)[0];
    return {
      prompt: `What is the order of draw for ${tube.tube}?`,
      correctAnswer: tube.orderLabel,
      options: buildOptions(tube.orderLabel, tubeData.map((item) => item.orderLabel), 4)
    };
  }

  const groupedTest = sample(getScenarioTestPool().filter((entry) => entry.test !== "N/A"))[0];
  const additiveAnswer = getGroupedTestAdditives(groupedTest.test);
  const additivePool = unique([
    ...tubeData.map((item) => item.additiveDisplay),
    ...getScenarioTestPool()
      .map((entry) => getGroupedTestAdditives(entry.test)?.answer)
      .filter(Boolean)
  ]);

  return {
    prompt: `Which additive or additive combination can be used for ${groupedTest.test}?`,
    correctAnswer: additiveAnswer.answer,
    options: buildOptions(additiveAnswer.answer, additivePool, 4)
  };
}

function buildQuizQuestions() {
  const types = ["additive", "na", "not-test", "department", "inversion", "test-to-tube", "order", "logic"];
  const questions = [];
  let attempts = 0;

  while (questions.length < 15 && attempts < 500) {
    attempts += 1;
    const question = makeQuizQuestion(sample(types)[0]);
    const signature = `${question.prompt}|${question.correctAnswer}`;
    if (questions.some((item) => `${item.prompt}|${item.correctAnswer}` === signature)) {
      continue;
    }
    questions.push(question);
  }

  if (questions.length < 15) {
    questions.push(
      {
        prompt: "Which tube has no test and no inversion amount?",
        correctAnswer: "Red (Waste)",
        options: buildOptions("Red (Waste)", tubeData.map((tube) => tube.tube), 4)
      },
      {
        prompt: "Which tube should not be inverted at all?",
        correctAnswer: "Royal Blue",
        options: buildOptions("Royal Blue", tubeData.map((tube) => tube.tube), 4)
      },
      {
        prompt: "Which department handles Blood Bank Collections?",
        correctAnswer: "Blood Bank",
        options: buildOptions("Blood Bank", unique(tubeData.map((item) => item.department)), 4)
      }
    );
  }

  state.quiz.questions = questions.slice(0, 15);
  state.quiz.currentIndex = 0;
  state.quiz.answers = {};
  state.quiz.submitted = false;
  elements.quizResults.classList.add("hidden");
}

function getQuizQuestion() {
  return state.quiz.questions[state.quiz.currentIndex];
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderQuizQuestion() {
  const question = getQuizQuestion();
  if (!question) {
    return;
  }

  elements.quizPrompt.textContent = question.prompt;
  elements.quizQuestionCounter.textContent = `${state.quiz.currentIndex + 1} / 15`;
  elements.quizAnsweredCounter.textContent = `${Object.keys(state.quiz.answers).length}`;
  const selected = state.quiz.answers[state.quiz.currentIndex];

  elements.quizOptions.innerHTML = question.options.map((option) => {
    let className = "quiz-option";
    if (!state.quiz.submitted && selected === option) {
      className += " selected";
    }
    if (state.quiz.submitted) {
      if (option === question.correctAnswer) {
        className += " correct";
      } else if (selected === option && selected !== question.correctAnswer) {
        className += " incorrect";
      }
    }
    return `<button class="${className}" data-option="${escapeHtml(option)}" type="button">${escapeHtml(option)}</button>`;
  }).join("");

  elements.quizOptions.querySelectorAll(".quiz-option").forEach((button) => {
    button.addEventListener("click", () => {
      if (state.quiz.submitted) {
        return;
      }
      state.quiz.answers[state.quiz.currentIndex] = button.textContent;
      elements.quizAnsweredCounter.textContent = `${Object.keys(state.quiz.answers).length}`;
      renderQuizQuestion();
    });
  });

  if (!state.quiz.submitted) {
    setMessage(elements.quizMessage, "Pick an answer and move through the deck in any order.", "info");
  }
}

function nextQuizQuestion() {
  if (state.quiz.currentIndex < state.quiz.questions.length - 1) {
    state.quiz.currentIndex += 1;
    renderQuizQuestion();
  }
}

function submitQuiz() {
  state.quiz.submitted = true;
  const total = state.quiz.questions.length;
  const score = state.quiz.questions.reduce((count, question, index) => {
    return count + (state.quiz.answers[index] === question.correctAnswer ? 1 : 0);
  }, 0);

  renderQuizQuestion();
  elements.quizResults.classList.remove("hidden");
  elements.quizResults.innerHTML = `
    <h3>Quiz Results</h3>
    <p><strong>${score} / ${total}</strong> correct.</p>
    <div class="quiz-result-list">
      ${state.quiz.questions.map((question, index) => {
        const userAnswer = state.quiz.answers[index] || "No answer selected";
        const correct = userAnswer === question.correctAnswer;
        return `
          <article class="quiz-result-item ${correct ? "correct" : "incorrect"}">
            <strong>Q${index + 1}: ${question.prompt}</strong>
            <p>Your answer: ${userAnswer}</p>
            <p>Correct answer: ${question.correctAnswer}</p>
          </article>
        `;
      }).join("")}
    </div>
  `;
  setMessage(elements.quizMessage, "Quiz submitted. Review your score and use Fresh Quiz for a new randomized set.", "success");
}

function resetQuiz() {
  buildQuizQuestions();
  renderQuizQuestion();
  setMessage(elements.quizMessage, "Fresh 15-question quiz generated.", "info");
}

function initializeEvents() {
  elements.toggleChart.addEventListener("click", toggleChart);
  elements.submitMatching.addEventListener("click", evaluateMatching);
  elements.resetMatching.addEventListener("click", resetMatchingGame);
  elements.checkScenario.addEventListener("click", checkScenario);
  elements.nextScenario.addEventListener("click", nextScenario);
  elements.newScenarioSet.addEventListener("click", resetScenarioGame);
  elements.nextQuizQuestion.addEventListener("click", nextQuizQuestion);
  elements.submitQuiz.addEventListener("click", submitQuiz);
  elements.retryQuiz.addEventListener("click", resetQuiz);
}

function showBootError(error) {
  document.body.innerHTML = `
    <main style="font-family: Arial, sans-serif; padding: 24px; color: #2f2044;">
      <h1>Phlebotomy PlayLab hit an error while loading.</h1>
      <p>Please refresh the page. If it still happens, the error below will help us debug it.</p>
      <pre style="white-space: pre-wrap; background: #fff3f3; padding: 16px; border-radius: 12px;">${escapeHtml(error?.stack || error?.message || String(error))}</pre>
    </main>
  `;
}

function boot() {
  try {
    buildReferenceChart();
    setupModeSwitching();
    initializeEvents();
    resetMatchingGame();
    resetScenarioGame();
    resetQuiz();
  } catch (error) {
    console.error(error);
    showBootError(error);
  }
}

boot();
