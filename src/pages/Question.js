import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ResultCard from "../components/ResultCard";
import {
  Grid,
  Button,
  Box,
  Paper,
  LinearProgress,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

import styled from "@emotion/styled";

const questions = [
  {
    question: "What is your favorite activity?",
    answer: { a: "Team sports", b: "Running", c: "A Movie", d: "A book" },
  },
  {
    question: "What is your favorite place in town?",
    answer: { a: "A club", b: "A beach", c: "A park", d: "A Library" },
  },
  {
    question:
      "If something in your house breaks, what is the first thing you do?",
    answer: {
      a: "Call a friend",
      b: "Try to fix it on my own",
      c: "Call a friend",
      d: "Try to ignore it",
    },
  },
  {
    question: "What is your greatest achievement?",
    answer: {
      a: "Starting family",
      b: "Having great friends",
      c: "Traveling a lot",
      d: "Advancing my career",
    },
  },
  {
    question: "What is the thing you'd never say to another person?",
    answer: {
      a: "Comment on the way they look",
      b: "Comment on their personal lives",
      c: "Comment on the career decisions",
      d: "Swear at them",
    },
  },
  {
    question: "What is the word people would most likely use to describe you?",
    answer: { a: "Kind", b: "Smart", c: "Impulsive", d: "Quiet" },
  },
  {
    question:
      "If you were running out of time to finish the project, what would you do?",
    answer: {
      a: "Ask for help from colleagues",
      b: "Ask for an extended deadline",
      c: "Focus on priorities and speed up",
      d: "Continue working following the same tempo",
    },
  },
  {
    question: "On a typical morning, how do you feel when waking up?",
    answer: {
      a: "Very Energetic",
      b: "Energetic",
      c: "Neutral",
      d: "Exhausted",
    },
  },
  {
    question: "What do you usually do at the party?",
    answer: {
      a: "I am busy talking with many people.",
      b: "Intermittently chatting with a group of acquaintances",
      c: "Sit in a corner and play on the phone.",
      d: "I don't go to a party",
    },
  },
  {
    question: "What was your favorite game when you were a child?",
    answer: {
      a: "Playing sports",
      b: "Hide and seek",
      c: "Playing with lego/dolls",
      d: "Borad game/Puzzle",
    },
  },
];

const pets = [
  {
    name: "Retriever",
    img: "/Retriever.png",
    subtitle:
      "You are considerate of people and like to work together! Warm, active and responsible, you are a Golden Retriever.",
    content:
      "A retriever is a type of gun dog that retrieves game for a hunter. Generally gun dogs are divided into three major classifications: retrievers, flushing spaniels, and pointing breeds.",
  },
  {
    name: "Border Collie",
    img: "/Border-Collie.png",
    subtitle:
      "You are intelligent and smart! Show initiative and leadership, you are a Border Collie",
    content:
      "The Border Collie is a British breed of herding dog of medium size. Widely considered to be the most intelligent dog breed, they are descended from landrace sheepdogs once found all over the British Isles, but became standardised in the Anglo-Scottish border region.",
  },
  {
    name: "Poodle",
    img: "/Poodle.png",
    subtitle:
      "You are highly interactive and intelligent, and when you get to know each other, you are a poodle, full of affection.",
    content:
      "The Poodle, called the Pudel in German and the Caniche in French, is a breed of water dog. The breed is divided into four varieties based on size, the Standard Poodle, Medium Poodle, Miniature Poodle and Toy Poodle, although the Medium Poodle variety is not universally recognised.",
  },
  {
    name: "Jack Russell Terrier",
    img: "/Terrier.png",
    subtitle:
      "You are sharp and agile, you are careful and thorough, you are the Jack Russell Terrier",
    content:
      'The Jack Russell Terrier is a small terrier that has its origins in fox hunting in England. It is principally white-bodied and smooth, rough or broken-coated and can be any colour. Small tan and white terriers that technically belong to other breeds are sometimes known erroneously as "Jack Russells".',
  },
];
function Question() {
  const [step, setStep] = useState(0);
  const [totalResult, setTotalResult] = useState({ a: 0, b: 0, c: 0, d: 0 });
  const [userAnswer, setUserAnswer] = useState();
  const [isProcess, setIsProcess] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [puppy, setPuppy] = useState();

  useEffect(() => {
    return () => {
      setStep(0);
      setTotalResult({ a: 0, b: 0, c: 0, d: 0 });
      setUserAnswer();
      setIsProcess(true);
      setIsLoading(false);
      setPuppy();
    };
  }, []);

  const handleChange = (e) => {
    let value = e.target.value;
    setUserAnswer(value);
    setTotalResult((result) => ({
      ...result,
      [value]: result[value] + 1,
    }));
  };

  const handleNextBtn = () => {
    setUserAnswer();
    if (step === 9) {
      let calculation =
        totalResult.a * 10 +
        totalResult.b * 6 +
        totalResult.c * 3 +
        totalResult.d * 1;
      let resultPuppy =
        calculation > 60
          ? pets[0]
          : calculation > 45
          ? pets[1]
          : calculation > 35
          ? pets[2]
          : pets[3];
      setPuppy(resultPuppy);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsProcess(false);
      }, 3000);
    } else {
      setStep(step + 1);
    }
  };
  if (isLoading)
    return (
      <>
        <Loading />
      </>
    );
  else if (isProcess)
    return (
      <>
        <Paper
          variant="outlined"
          sx={{ marginTop: "2rem", marginBottom: "1rem" }}
        >
          <LinearProgress variant="determinate" value={(step + 1) * 10} />
          <Box m={3}>
            <Grid container spacing={1}>
              <Grid item sm={12} md={6}>
                <h3>Question {step + 1}</h3>
                <p>{questions[step].question}</p>
              </Grid>
              <Grid item sm={12} md={6}>
                <FormControl sx={{ width: "100%" }}>
                  <RadioGroup
                    aria-labelledby="radio-buttons-group-label"
                    name="radio-buttons-group"
                  >
                    <p>SELECT ONLY ONE</p>
                    {Object.keys(questions[step].answer).map((key, index) => {
                      return (
                        <RadioWrapper
                          key={index}
                          style={{
                            backgroundColor:
                              userAnswer === key ? "#bbdefb" : "#fff",
                          }}
                        >
                          <FormControlLabel
                            value={key}
                            control={<Radio checked={userAnswer === key} />}
                            label={questions[step].answer[key]}
                            onChange={(e) => handleChange(e)}
                            sx={{ width: "100%" }}
                          />
                        </RadioWrapper>
                      );
                    })}
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        </Paper>
        <Button
          variant="contained"
          onClick={handleNextBtn}
          disabled={userAnswer === undefined}
          sx={{ float: "right" }}
        >
          Next
        </Button>
      </>
    );
  else
    return (
      <>
        <ResultCard result={puppy} />
      </>
    );
}

const RadioWrapper = styled.div`
  border: 1px solid #e0e0e0;
  padding: 0.5rem 1rem;
  margin: 0.25rem 0;
  border-radius: 10px;
  justify-content: space-between;
`;

export default Question;
