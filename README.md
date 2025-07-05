# Hangman Game - Interactive Word Guessing Game

An interactive word-guessing game where players reveal hidden words by guessing letters across six different categories: Movies, TV Shows, Countries, Capital Cities, Animals, and Sports. The game features a visual health system that tracks remaining attempts through a dynamic color-coded progress bar.

This project represents my journey learning modern React development practices, testing methodologies, and performance optimization. Building it taught me valuable lessons about component architecture, state management, and creating maintainable, type-safe code. The focus was on writing clean, well-tested code while exploring Next.js 15 features and establishing good development practices.

The experience reinforced the importance of proper component composition, effective state lifting, and comprehensive testing strategies - skills that are foundational for scalable frontend development.

## 🎯 Key Features

### 🎲 Game Functionality

- **Word Categories**: 6 categories with 30+ words each from JSON data
- **Visual Health Tracking**: Dynamic progress bar with color-coded feedback
- **Interactive Keyboard**: On-screen keyboard with proper disabled states
- **Game State Management**: Win/lose/pause states with appropriate UI
- **Letter Revelation**: Real-time word completion tracking

### 🎨 User Experience

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Interactions**: CSS transitions and hover effects
- **Accessible Interface**: ARIA labels and proper semantic markup
- **Visual Feedback**: Clear indication of user actions and game progress

### 🏗️ Development Practices

- **Type Safety**: Full TypeScript coverage with custom type definitions
- **Component Architecture**: Reusable, well-tested components
- **Testing Strategy**: Unit tests for components and game logic
- **Performance Focus**: Optimized bundle size and loading times
- **Clean Code**: Consistent formatting and linting with ESLint/Prettier

## 📸 Screenshots

<details>
<summary><code>Desktop Experience</code></summary>

_Homepage with gradient background and card-based layout_
![Homepage Desktop](readme-assets/homepage-desktop.png)

_Category selection with responsive grid layout_
![Category Selection](readme-assets/category-selection.png)

_Game interface with health bar and interactive keyboard_
![Game Interface](readme-assets/game-interface.png)

</details>

<details>
<summary><code>Mobile Experience</code></summary>

_Responsive design adapting to mobile viewports_
![Mobile Interface](readme-assets/mobile-interface.png)

</details>

## 🚀 Technical Highlights

### Advanced React Patterns

```typescript
// Clean component composition with proper TypeScript interfaces
interface GamePlayClientProps {
  category: WordCategory;
  targetWord: string;
}

// Effective state management with proper lifting
const [gameState, setGameState] = useState<GameState>("playing");
const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
```

### Component Architecture

```typescript
// Reusable components with proper TypeScript interfaces
interface KeyboardProps {
  guessedLetters: string[];
  onUserGuess: (e: React.MouseEvent<HTMLButtonElement>, letter: string) => void;
}

// Proper separation of concerns
const Keyboard = ({ guessedLetters, onUserGuess }: KeyboardProps) => {
  // Component logic
};
```

### Testing Strategy

```typescript
// Comprehensive component testing
describe("Keyboard Component", () => {
  it("renders all 26 alphabet buttons", () => {
    render(<Keyboard guessedLetters={[]} onUserGuess={mockFn} />);
    expect(screen.getAllByRole("button")).toHaveLength(26);
  });
});
```

## 🛠️ Tech Stack

### Core Technologies

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React 19** - Latest React features and hooks

### Development Tools

- **Vitest** - Fast unit testing framework
- **React Testing Library** - Component testing utilities
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting

### Build & Deployment

- **Next.js Build** - Optimized production builds
- **Vercel** - Deployment platform
- **TypeScript Compiler** - Type checking

## 📊 Project Metrics

<details>
<summary><code>Performance Metrics - Verified Results</code></summary>

### 🚀 Core Web Vitals - All Green!

**Measured with [web.dev/measure](https://web.dev/measure):**

- **First Contentful Paint**: 0.2s ⚡ (Excellent)
- **Largest Contentful Paint**: 0.3s ⚡ (Excellent)
- **Cumulative Layout Shift**: 0.001 ✅ (Excellent)
- **Total Blocking Time**: 10ms ⚡ (Excellent)
- **Speed Index**: 0.5s ⚡ (Excellent)

**Verified with [WebPageTest.org](https://webpagetest.org):**

- **Time to First Byte**: 195ms ⚡
- **Start Render**: 400ms ⚡
- **First Contentful Paint**: 458ms ⚡
- **Speed Index**: 517ms ⚡
- **Largest Contentful Paint**: 458ms ⚡
- **Cumulative Layout Shift**: 0 ✅ (Perfect)
- **Total Blocking Time**: 0ms ⚡ (Perfect)
- **Page Weight**: 146KB 🪶 (Lightweight)

**Interactive Performance:**

- **Time to Interactive**: ~305ms ⚡ (Lightning fast)

**Key learnings:**

- Understanding how Next.js optimizations contribute to performance
- Importance of bundle size (146KB total) for fast loading
- How proper component structure affects Core Web Vitals
- The impact of responsive design on user experience

</details>

<details>
<summary><code>Code Quality & Testing</code></summary>

### 📝 TypeScript Implementation

- ✅ **Full TypeScript Coverage**: All components and utilities typed
- ✅ **Custom Type Definitions**: Game states, component props, and interfaces
- ✅ **Strict Mode**: Enabled for maximum type safety

### 🧪 Testing Strategy

- ✅ **Unit Tests**: Component rendering and interaction testing
- ✅ **Integration Tests**: User workflow testing with React Testing Library
- ✅ **Mock Implementation**: Proper mocking of Next.js components
- 🔄 **Coverage Reports**: In progress - expanding test coverage

### 📦 Build Optimization

- ✅ **Next.js Optimization**: Automatic code splitting and optimization
- ✅ **Bundle Analysis**: Lightweight 146KB total page weight
- ✅ **Production Ready**: Optimized builds with Vercel deployment

</details>

<details>
<summary><code>Accessibility & Browser Support</code></summary>

### ♿ Accessibility Features

- ✅ **Semantic HTML**: Proper heading hierarchy and landmark elements
- ✅ **Tab Navigation**: Full keyboard navigation support
- ✅ **ARIA Labels**: Screen reader friendly button labels
- ✅ **Focus Management**: Logical tab order throughout the interface
- 🔄 **Screen Reader Testing**: Planned for comprehensive accessibility audit
- 🔄 **Color Contrast Validation**: Planned verification with WebAIM tools

### 🌐 Browser Compatibility

- ✅ **Modern Browser Support**: ES6+ features with Next.js compatibility
- ✅ **Responsive Design**: Mobile-first approach with tested breakpoints
- 🔄 **Cross-browser Testing**: Planned testing across multiple browsers

### 📐 Responsive Design

- ✅ **Mobile**: 320px - 768px (Tested on multiple devices)
- ✅ **Tablet**: 768px - 1024px (Responsive grid layouts)
- ✅ **Desktop**: 1024px+ (Optimized for larger screens)

_Note: Physical keyboard navigation (pressing 'A' key to guess 'A') is planned for the next iteration. Current implementation supports tab navigation._

</details>

<details>
<summary><code>Development & Testing Tools</code></summary>

### 🔧 Verified Tools & Processes

- ✅ **Performance Testing**: web.dev/measure and WebPageTest.org
- ✅ **TypeScript Compilation**: Zero errors in production build
- ✅ **Vitest Testing**: Unit and integration test suite
- ✅ **ESLint**: Code quality and consistency checks

### 📋 Planned Testing

- 🔄 **Accessibility Audit**: axe DevTools and manual testing
- 🔄 **Cross-browser Testing**: Chrome, Firefox, Safari, Edge
- 🔄 **Screen Reader Testing**: NVDA, JAWS, VoiceOver
- 🔄 **Performance Monitoring**: Lighthouse CI integration

</details>

## 🎮 How to Play

1. **Choose Category**: Select from Movies, TV Shows, Countries, Animals, etc.
2. **Guess Letters**: Click on-screen keyboard or use tab navigation
3. **Watch Health**: Monitor your remaining guesses with the visual health bar
4. **Win or Lose**: Complete the word before health runs out!

## 🏃‍♂️ Quick Start

```bash
# Clone the repository
git clone https://github.com/Md-Talim/hangman-game.git

# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm run test

# Build for production
npm run build
```

## 🎯 Learning Outcomes

### Frontend Development Skills

- **Modern React**: Functional components, hooks, and proper state management
- **TypeScript Integration**: Type safety, interfaces, and custom type definitions
- **Component Design**: Reusable, testable component architecture
- **State Management**: Effective state lifting and prop drilling patterns

### Testing & Quality Practices

- **Unit Testing**: Component rendering and interaction testing with Vitest
- **Test-Driven Development**: Writing tests to ensure code reliability
- **Accessibility Awareness**: Implementing ARIA labels and semantic HTML
- **Performance Optimization**: Understanding Core Web Vitals and optimization techniques

### Development Workflow

- **Modern Tooling**: Next.js 15, Tailwind CSS, and latest React features
- **Code Quality**: ESLint, Prettier, and TypeScript for maintainable code
- **Responsive Design**: Mobile-first approach with multiple breakpoints
- **Production Deployment**: Vercel deployment with performance monitoring

### Problem-Solving Experience

- **Game Logic Implementation**: Managing complex state interactions
- **User Experience Design**: Creating intuitive and accessible interfaces
- **Performance Optimization**: Achieving excellent Core Web Vitals scores
- **Testing Strategies**: Learning to write comprehensive, meaningful tests

## 🚀 Future Improvements

This project is a learning foundation with planned enhancements:

### Planned Features

- **Game Persistence**: Local storage to save game progress
- **Error Boundaries**: Graceful error handling and recovery
- **Enhanced Accessibility**: Comprehensive screen reader testing
- **Integration Testing**: End-to-end testing with Playwright
- **Advanced Testing**: Edge cases and error scenarios

### Technical Improvements

- **Custom Hooks**: Extract game logic into reusable hooks
- **Performance Monitoring**: Implement Lighthouse CI
- **Advanced State Management**: Consider Context API for complex state
- **Enhanced TypeScript**: More sophisticated type patterns

### Learning Goals

- **Testing Mastery**: Expanding from basic to comprehensive test coverage
- **Accessibility Excellence**: WCAG 2.1 AA compliance verification
- **Performance Analysis**: Deep understanding of optimization techniques
- **Code Architecture**: Exploring more advanced React patterns

## 🔗 Links

- **Live Demo**: [hngmn.vercel.app](https://hngmn.vercel.app/)
- **Frontend Mentor Challenge**: [Hangman Game Challenge](https://www.frontendmentor.io/challenges/hangman-game-rsQiSVLGWn)

---

**Built with ❤️ by Md Talim**

_A learning project demonstrating modern frontend development practices, clean code principles, and performance optimization techniques. This project represents my commitment to continuous learning and building quality, maintainable applications._

**Current Focus**: Expanding testing practices, accessibility implementation, and performance optimization while maintaining clean, readable code.
