import styled from 'styled-components';
import { BsThreeDotsVertical, BsHeart } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';
import {
  MdOutlineEdit,
  MdOutlineShare,
  MdPeople,
  MdPublicOff,
} from 'react-icons/md';
import { PrimaryButton } from 'components/Button';

export const CardContainer = styled.div`
  display: grid;
  grid-template-rows: 70px 250px 230px 100px;
  width: 450px;
  height: 660px;
  border: 1px solid ${({ theme }) => theme.color.grey};
`;

/* Top Nav */

export const CardTopNav = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.color.black};
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1em;
  padding-left: 1.5em;
`;

export const CardTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const PublicIcon = styled(MdPeople)`
  color: ${({ theme }) => theme.color.black};
`;

export const PrivateIcon = styled(MdPublicOff)`
  color: ${({ theme }) => theme.color.black};
`;

export const OptionIcon = styled(BsThreeDotsVertical)`
  color: ${({ theme }) => theme.color.black};
  font-size: 1.3rem;
`;

/* Image and Label */

export const PlanImageWrapper = styled.div`
  background: ${({ theme }) => theme.color.primary};
`;

export const PlanImg = styled.img`
  height: 100%;
  width: 100%;
`;

export const PlanCardContent = styled.div`
  padding: 1em 2em;
  font-size: 0.9rem;
  line-height: 1.3rem;
  color: ${({ theme }) => theme.color.primary};
`;

export const StyledLabelContainer = styled.div`
  display: flex;
  gap: 0.5em;
`;

/* Slug */

export const StyledSlugContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.black};
`;

export const StyledPlanDescription = styled.p`
  overflow: hidden;
`;

export const StyledLikeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const HeartIcon = styled(BsHeart)`
  color: ${({ theme }) => theme.color.black};
  cursor: pointer;
`;

/* Bottom part */
export const StyledBottomContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 2em;
  justify-content: center;
  gap: 1em;
`;

export const PlanCardButton = styled(PrimaryButton)`
  font-size: 0.9rem;
  width: fit-content;
`;

export const ArrowIcon = styled(FaArrowRight)`
  font-size: 1rem;
`;

export const EditIcon = styled(MdOutlineEdit)`
  font-size: 1.2rem;
`;

export const PlanBottomNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  padding-top: 0.5em;
`;

export const ShareIcon = styled(MdOutlineShare)`
  font-size: 1.5rem;
  cursor: pointer;
`;
