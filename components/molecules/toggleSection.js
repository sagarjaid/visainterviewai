import Image from 'next/image';

const ToggleSection = ({
  title,
  content,
  isToggled,
  onToggle,
  handleTextToSpeech,
  setToogle,
  lastToogle,
}) => {
  const handleToogleTextToSpeech = (content, event) => {
    event.stopPropagation();
    handleTextToSpeech(content);
    setToogle(true);
  };

  return (
    <div
      onClick={onToggle}
      className={`flex text-sm justify-between items-top bg-gray-50 cursor-pointer border-b p-4 ${
        lastToogle ? 'rounded-lg' : 'rounded-none'
      }`}>
      <div className='flex flex-col gap-3 max-w-[80%]'>
        <div>{title}</div>
        {isToggled && <div className='text-xs text-gray-600'>{content}</div>}
      </div>
      <div className='flex flex-col gap-1 justify-start items-center'>
        <div>
          <Image
            src={isToggled ? '/up-arrow.svg' : '/down-arrow.svg'}
            width={25}
            height={25}
          />
        </div>
        {isToggled && (
          <div
            onClick={(event) => handleToogleTextToSpeech(content, event)}
            className='cursor-pointer w-fit mt-1'>
            <Image
              src='/speaker-on.svg'
              width={22}
              height={22}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ToggleSection;