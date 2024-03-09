const { sendReccomendationViaMail } = require("../utils/sendRecommendation");

exports.quiz = async (req, res) => {
  try {
    const quizResults = req.body;

    const score = calculateScore(quizResults);

    const cleanseRecommendation = getCleanseRecommendation(score);

    await sendReccomendationViaMail(cleanseRecommendation);

    res.status(200).json({ message: "Recommendation sent via email" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

function calculateScore(quizResults) {
  // 0: Hashimoto’s cleanse
  // 1: Graves disease Hyperthyroid cleanse
  // 2: Primary Hypothyroid Cleanse
  // 3: liver cleanse
  // 4: H. pylori cleanse
  // 5: Gut Cleanse
  // 6: Adrenal Cleanse

  let scores = [0, 0, 0, 0, 0, 0, 0];

  // Process each question and calculate the score
  quizResults.selectedOptionsArray.forEach((question) => {
    const option = question.selectedOptions[0].option;

    switch (question.questionNumber) {
      case 1:
        // I have Hashimoto’s Thyroid
        if (option === "a") {
          scores[0] += 100; // Automatically do the Hashimoto’s cleanse
          return scores;
        }
        break;

      case 2:
        // I have Graves’ disease
        if (option === "a") {
          scores[1] += 100;
          return scores;
          // if (scores[0] > 0) {
          //   scores[2] -= 1;
          //   scores[1] -= 1;
          // } else {
          //   scores[1] += 1; // Automatically do the Graves disease cleanse
          // }
        }
        break;

      case 3:
        // I have had my thyroid surgically removed
        if (option === "a") {
          scores[3] += 2; // Give 2 points towards the liver cleanse
        }
        break;

      case 4:
        // I have had my thyroid surgically removed
        if (option === "a") {
          scores[4] += 100; // Give 2 points towards the liver cleanse
          return scores;
        }
        break;

      case 5:
        // I have had my thyroid surgically removed
        if (option === "a") {
          scores[3] += 2; // Give 2 points towards the liver cleanse
        }
        break;

      case 6:
        if (option === "b") {
          scores[3] += 1;
        } else if (option === "c") {
          scores[3] += 2;
        } else if (option === "d") {
          scores[3] += 3;
        }

        break;

      case 7:
        if (option === "b") {
          scores[3] += 1;
        } else if (option === "c") {
          scores[3] += 2;
        } else if (option === "d") {
          scores[3] += 3;
        }
        break;

      case 8:
        if (option === "b") {
          scores[5] += 1;
        } else if (option === "c") {
          scores[5] += 2;
        } else if (option === "d") {
          scores[5] += 3;
        }
        break;

      case 9:
        if (option === "b") {
          scores[3] += 1;
        } else if (option === "c") {
          scores[3] += 2;
        } else if (option === "d") {
          scores[3] += 3;
        }
        break;

      case 10:
        if (option === "b") {
          scores[2] += 1;
        } else if (option === "c") {
          scores[2] += 2;
        } else if (option === "d") {
          scores[2] += 3;
        }
        break;

      case 11:
        if (option === "a") {
          scores[6] += 3;
        } else if (option === "b") {
          scores[2] += 2;
        } else if (option === "c") {
          scores[6] += 3;
        }
        break;

      case 12:
        if (option === "b") {
          scores[6] += 1;
        } else if (option === "c") {
          scores[6] += 2;
        } else if (option === "d") {
          scores[6] += 3;
        }
        break;

      case 13:
        if (option === "b") {
          scores[2] += 1;
        } else if (option === "c") {
          scores[2] += 2;
        } else if (option === "d") {
          scores[2] += 3;
        }
        break;

      case 14:
        if (option === "b") {
          scores[6] += 1;
        } else if (option === "c") {
          scores[6] += 2;
        } else if (option === "d") {
          scores[6] += 3;
        }
        break;

      case 15:
        if (option === "b") {
          scores[6] += 1;
        } else if (option === "c") {
          scores[6] += 2;
        } else if (option === "d") {
          scores[6] += 3;
        }
        break;

      case 16:
        if (option === "b") {
          scores[2] += 1;
        } else if (option === "c") {
          scores[2] += 2;
        } else if (option === "d") {
          scores[2] += 3;
        }
        break;

      case 17:
        if (option === "b") {
          scores[5] += 1;
        } else if (option === "c") {
          scores[5] += 2;
        } else if (option === "d") {
          scores[5] += 3;
        }
        break;

      case 18:
        if (option === "b") {
          scores[6] += 1;
        } else if (option === "c") {
          scores[6] += 2;
        } else if (option === "d") {
          scores[6] += 3;
        }
        break;

      case 19:
        if (option === "a") {
          scores[6] += 3;
        } else if (option === "b") {
          scores[6] += 3;
        } else if (option === "c") {
          scores[3] += 3;
        }
        break;

      case 20:
        question.selectedOptions.forEach((ans) => {
          if (ans.option === "a") {
            scores[6] += 3;
          } else if (ans.option === "b") {
            scores[6] += 2;
          } else if (ans.option === "c") {
            scores[3] += 3;
          } else if (ans.option === "d") {
            scores[2] += 2;
          } else if (ans.option === "f") {
            scores[6] += 1;
          }
        });

        break;

      default:
        break;
    }
  });

  return scores;
}

function getCleanseRecommendation(scores) {
  const cleanserNames = [
    "Hashimoto’s cleanse",
    "Graves disease Hyperthyroid cleanse",
    "Primary Hypothyroid Cleanse",
    "Liver cleanse",
    "H. pylori cleanse",
    "Gut Cleanse",
    "Adrenal Cleanse",
  ];

  const index = scores.indexOf(Math.max(...scores));

  return cleanserNames[index];
}
