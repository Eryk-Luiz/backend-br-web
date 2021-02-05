import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MdClose } from 'react-icons/md';
import {
  Drop,
  ItemsContainer,
  Container,
  SelectedTagsContainer,
  SelectedTagsItem,
} from './styles';

interface ILabel {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string | null;
}

interface TagsSelectorProps {
  labels: Array<ILabel>;
  selectedTags: Array<ILabel>;
  setSelectedTags: Function;
}

const TagsSelector: React.FC<TagsSelectorProps> = ({
  labels,
  selectedTags,
  setSelectedTags,
}) => {
  const [active, setActive] = useState(false);
  const [topPosition, setTopPosition] = useState(0);
  const [rightPosition, setRightPosition] = useState(0);
  const [dropUpWidth, setDropUpWidth] = useState(0);
  const [visibleTags, setVisibleTags] = useState<ILabel[]>();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDropUp = useCallback(() => {
    const { current } = inputRef;

    const { top } = current.getBoundingClientRect();
    const { right } = current.getBoundingClientRect();
    const { width } = current.getBoundingClientRect();

    setTopPosition(top);
    setRightPosition(right);
    setDropUpWidth(width);
  }, []);

  const handleSelectTags = useCallback(
    (label: ILabel) => {
      inputRef.current.value = '';

      const alreadyInserted = selectedTags.findIndex(
        item => item.id === label.id,
      );

      if (alreadyInserted > -1) {
        const filteredTags = selectedTags.filter(item => item.id !== label.id);

        setSelectedTags(filteredTags);
      } else {
        setSelectedTags([...selectedTags, label]);
      }
    },
    [selectedTags, setSelectedTags],
  );

  const filterLabels = useCallback(
    (value: string) => {
      if (!value) {
        setVisibleTags(labels);
        return;
      }

      const filteredLabels = visibleTags.filter(item => {
        if (item.name.includes(value)) {
          return item;
        }
      });

      setVisibleTags(filteredLabels);
    },
    [visibleTags, labels],
  );

  useEffect(() => {
    if (active) {
      handleDropUp();
    } else {
      setVisibleTags(labels);
    }
  }, [active, handleDropUp, labels]);

  useEffect(() => {
    handleDropUp();
    setVisibleTags(labels);
  }, [handleDropUp, labels]);

  return (
    <>
      <Container>
        <input
          type="text"
          onChange={({ target }) => filterLabels(target.value)}
          onFocus={() => setActive(true)}
          ref={inputRef}
        />

        {active && (
          <Drop onClick={() => setActive(false)}>
            <ItemsContainer
              top={topPosition}
              right={rightPosition}
              width={dropUpWidth}
            >
              <ul>
                {visibleTags.map(label => (
                  <li
                    onClick={() => {
                      setActive(false);
                      handleSelectTags(label);
                    }}
                  >
                    {label.name}
                  </li>
                ))}
              </ul>
            </ItemsContainer>
          </Drop>
        )}
      </Container>

      {selectedTags.length > 0 && (
        <SelectedTagsContainer>
          {selectedTags.map(label => (
            <SelectedTagsItem defaultColor={label.color} key={label.id}>
              {label.name}
              <MdClose
                size={18}
                onClick={() => {
                  handleSelectTags(label);
                }}
              />
            </SelectedTagsItem>
          ))}
        </SelectedTagsContainer>
      )}
    </>
  );
};

export default TagsSelector;
