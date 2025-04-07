import React, {
    createContext,
    use,
    useCallback,
    useContext,
    useDebugValue,
    useMemo,
    useState
} from 'react';
import './Welcome.css';

type ThemesType = {
    theme: {
        color: 'light' | 'dark';
    };
    onChangeTheme: (color: 'light' | 'dark') => void;
};
const ThemeContext = createContext<ThemesType>({
    theme: { color: 'light' },
    onChangeTheme: () => {}
});

const useTheme = () => {
    const [theme, setTheme] = useState<ThemesType['theme']>({ color: 'light' });
    const onChangeTheme = useCallback((color: 'light' | 'dark') => {
        setTheme((prev) => ({ ...prev, color }));
    }, []);
    useDebugValue(theme.color === 'light' ? 'theme is light' : 'theme is dark');
    return { theme, onChangeTheme };
};

export default function Welcome() {
    const { theme, onChangeTheme } = useTheme();
    const [, forceRender] = useState({});

    const valueContext = useMemo(() => {
        return { theme, onChangeTheme };
    }, [theme, onChangeTheme]);
    const forceRenderTheme = () => {
        forceRender({});
    };

    return (
        <div className='welcome'>
            <div>
                <button onClick={forceRenderTheme}>Force render</button>
            </div>
            <ThemeContext.Provider value={valueContext}>
                <Form />
                <Label />
            </ThemeContext.Provider>
        </div>
    );
}

const Label = React.memo(() => {
    const { theme, onChangeTheme } = useContext(ThemeContext);
    console.log('Label render');
    return (
        <label>
            <input
                type='checkbox'
                checked={theme.color === 'dark'}
                onChange={(e) => {
                    onChangeTheme(e.target.checked ? 'dark' : 'light');
                }}
            />
            Use dark mode
        </label>
    );
});

const Form = () => {
    return (
        <Panel title='Welcome'>
            <Button>Sign in</Button>
            <Button>Log in</Button>
        </Panel>
    );
};

const Panel = ({
    title,
    children
}: {
    title: string;
    children: React.ReactNode;
}) => {
    const { theme } = useContext(ThemeContext);
    const className = 'panel-' + theme.color;
    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    );
};
const Button = ({ children }: { children: React.ReactNode }) => {
    const { theme, onChangeTheme } = useContext(ThemeContext);
    const className = 'button-' + theme.color;
    return (
        <button
            className={className}
            onClick={() => onChangeTheme(theme.color)}
        >
            {children}
        </button>
    );
};
