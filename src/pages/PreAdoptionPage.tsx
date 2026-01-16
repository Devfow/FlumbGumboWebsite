import React, { useState } from 'react';
import './PreAdoptionPage.css';

const PreAdoptionPage = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [quizAnswers, setQuizAnswers] = useState<string[]>(['', '', '']);

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real application, you would send the email to a backend here.
        console.log('Bio-Digital Frequency Submitted:', email);
        console.log('Compatibility Quiz Answers:', quizAnswers);
        setSubmitted(true);
    };

    const handleQuizChange = (index: number, value: string) => {
        const newAnswers = [...quizAnswers];
        newAnswers[index] = value;
        setQuizAnswers(newAnswers);
    };

    if (submitted) {
        return (
            <div className="pre-adoption-page">
                <div className="pre-adoption-card phase-space-gradient">
                    <h2>Dimensional Connection Initialized!</h2>
                    <p>Thank you for inputting your Bio-Digital Frequency. Your signal has been received across Phase Space. You will be the first to know when the "Crush" is finalized and the first wave of Flumb Gumbos is ready for their cushioned arrival into your reality. Prepare for hyper-dimensional flavor!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="pre-adoption-page">
            <div className="pre-adoption-card">
                <h1>Preparing the Welcome Mat for Phase Space Four</h1>
                <p className="status-report">
                    <strong>Status Report:</strong> Our current dimensional readings indicate that the Flumb Gumbos are undergoing crucial "Stability Testing." We cannot risk their delicate hyper-dimensional forms until their 3D silicone bodies are perfectly squishy, stable, and ready for their cushioned arrival into your home. Your patience ensures their safe transition!
                </p>

                <form onSubmit={handleEmailSubmit} className="calibration-form">
                    <label htmlFor="bioDigitalFrequency">Input your Bio-Digital Frequency:</label>
                    <input
                        type="email"
                        id="bioDigitalFrequency"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.frequency@dimension.net"
                        required
                    />
                    <button type="submit" className="cta-button">Initialize Connection</button>
                </form>

                <div className="compatibility-quiz">
                    <h2>Compatibility Quiz (Optional Fun)</h2>
                    <p>While we await calibration, test your dimensional compatibility:</p>
                    <div className="quiz-question">
                        <p>1. What is your favorite non-existent color?</p>
                        <label><input type="radio" name="q1" value="Blurnge" onChange={(e) => handleQuizChange(0, e.target.value)} /> Blurnge</label>
                        <label><input type="radio" name="q1" value="Glimmer-Green" onChange={(e) => handleQuizChange(0, e.target.value)} /> Glimmer-Green</label>
                        <label><input type="radio" name="q1" value="Phase-Pink" onChange={(e) => handleQuizChange(0, e.target.value)} /> Phase-Pink</label>
                    </div>
                    <div className="quiz-question">
                        <p>2. How many corners does your heart have?</p>
                        <label><input type="radio" name="q2" value="Zero (fluid)" onChange={(e) => handleQuizChange(1, e.target.value)} /> Zero (fluid)</label>
                        <label><input type="radio" name="q2" value="Four (standard)" onChange={(e) => handleQuizChange(1, e.target.value)} /> Four (standard)</label>
                        <label><input type="radio" name="q2" value="An infinite tessellation" onChange={(e) => handleQuizChange(1, e.target.value)} /> An infinite tessellation</label>
                    </div>
                    <div className="quiz-question">
                        <p>3. If you could communicate with a sentient nebula, what would be your first question?</p>
                        <label><input type="radio" name="q3" value="Are you squishy?" onChange={(e) => handleQuizChange(2, e.target.value)} /> Are you squishy?</label>
                        <label><input type="radio" name="q3" value="What's your favorite cosmic snack?" onChange={(e) => handleQuizChange(2, e.target.value)} /> What's your favorite cosmic snack?</label>
                        <label><input type="radio" name="q3" value="Can you teach me the dance of the photons?" onChange={(e) => handleQuizChange(2, e.target.value)} /> Can you teach me the dance of the photons?</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreAdoptionPage;
