import React, { useState } from 'react';
import {
    CButton,
    CCol,
    CForm,
    CFormInput,
    CFormSelect,
    CFormTextarea,
    CBreadcrumb,
    CBreadcrumbItem
} from '@coreui/react';
import { cilArrowLeft, cilPlus, cilMinus } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../../../../api/axiosInstance';
import { toast } from 'react-toastify';
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../../../components/index';
import '../../../../admin2/scss/style.scss';
import '../../../../admin2/scss/examples.scss';
import '../../../../admin2/scss/custom.css';

export default function AddCulture() {
    const navigate = useNavigate();

    // ====== State Fields ======
    const [bannerSubHeading, setBannerSubHeading] = useState('');
    const [bannerImage, setBannerImage] = useState(null);

    // ✅ Our Culture - Dynamic
    const [ourCultureItems, setOurCultureItems] = useState([
        { sub_heading: '', description: '', image: null },
    ]);

    const handleCultureChange = (index, field, value) => {
        const updated = [...ourCultureItems];
        updated[index][field] = value;
        setOurCultureItems(updated);
    };

    const addCulture = () =>
        setOurCultureItems([...ourCultureItems, { sub_heading: '', description: '', image: null }]);

    const removeCulture = (index) =>
        setOurCultureItems(ourCultureItems.filter((_, i) => i !== index));

    // ✅ Community Initiatives - Dynamic
    const [communityItems, setCommunityItems] = useState([
        { sub_heading: '', heading: '', description: '', image: null },
    ]);

    const handleCommunityChange = (index, field, value) => {
        const updated = [...communityItems];
        updated[index][field] = value;
        setCommunityItems(updated);
    };

    const addCommunity = () =>
        setCommunityItems([...communityItems, { sub_heading: '', heading: '', description: '', image: null }]);
    const removeCommunity = (index) =>
        setCommunityItems(communityItems.filter((_, i) => i !== index));

    const [keySubHeading, setKeySubHeading] = useState('');
    const [keyImage, setKeyImage] = useState(null);
    const [keyTextOnImage, setKeyTextOnImage] = useState('');

    const [employeeSubHeading, setEmployeeSubHeading] = useState('');
    const [employeeHeading, setEmployeeHeading] = useState('');
    const [employeeDescription, setEmployeeDescription] = useState('');
    const [employeeImage, setEmployeeImage] = useState(null);

    const [type, setType] = useState('single');
    const [status, setStatus] = useState(1);

    // ====== Handle Submit ======
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('banner_sub_heading', bannerSubHeading);
        formData.append('banner_image', bannerImage);

        // ✅ Append Our Culture items
        formData.append(
            'our_culture',
            JSON.stringify(
                ourCultureItems.map((item) => ({
                    sub_heading: item.sub_heading,
                    description: item.description,
                }))
            )
        );
        ourCultureItems.forEach((item, i) => {
            if (item.image) {
                formData.append(`our_culture_image_${i}`, item.image);
            }
        });

        // ✅ Append multiple community initiatives
        formData.append(
            'community_initiatives',
            JSON.stringify(
                communityItems.map((item) => ({
                    sub_heading: item.sub_heading,
                    heading: item.heading,
                    description: item.description,
                }))
            )
        );
        communityItems.forEach((item, i) => {
            if (item.image) {
                formData.append(`community_image_${i}`, item.image);
            }
        });

        formData.append('key_sub_heading', keySubHeading);
        formData.append('key_image', keyImage);
        formData.append('key_text_on_image', keyTextOnImage);

        formData.append('employee_sub_heading', employeeSubHeading);
        formData.append('employee_heading', employeeHeading);
        formData.append('employee_description', employeeDescription);
        formData.append('employee_image', employeeImage);

        formData.append('type', type);
        formData.append('status', status);

        try {
            const response = await api.post('/culture/add-culture', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            if (response.data.success) {
                toast.success('Culture section added successfully!');
                setTimeout(() => navigate('/admin/cultures'), 1000);
            } else {
                toast.error(response.data.message || 'Failed to add culture section');
            }
        } catch (error) {
            console.error('Error adding culture:', error);
            toast.error('An error occurred while adding culture');
        }
    };

    return (
        <div>
            <AppSidebar />
            <div className="wrapper d-flex flex-column min-vh-100">
                <AppHeader />
                <div className="body flex-grow-1 p-3">
                    {/* Breadcrumb */}
                    <div className="row bg-white mx-1 mb-3 py-3 shadow-sm">
                        <div className="col-lg-12 d-flex align-items-center">
                            <CBreadcrumb className="mb-0">
                                <CBreadcrumbItem>
                                    <Link to="/admin/dashboard" className="text-decoration-none">
                                        Home
                                    </Link>{' '}
                                    / Add Culture
                                </CBreadcrumbItem>
                            </CBreadcrumb>
                        </div>
                    </div>

                    {/* Back Button */}
                    <div className="row mb-3">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6 d-flex justify-content-end">
                            <Link to="/admin/culture" className="text-decoration-none">
                                <CButton className="custom-button text-white align-items-center d-flex gap-2">
                                    <CIcon icon={cilArrowLeft} size="lg" />
                                    Back
                                </CButton>
                            </Link>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-3">
                        <CForm className="row g-3" onSubmit={handleSubmit}>
                            {/* Banner Section */}
                            <h5 className="fw-bold mt-3">Banner Section</h5>
                            <CCol md={6}>
                                <CFormInput
                                    type="text"
                                    label="Banner Sub Heading"
                                    value={bannerSubHeading}
                                    onChange={(e) => setBannerSubHeading(e.target.value)}
                                />
                            </CCol>
                            <CCol md={6}>
                                <CFormInput
                                    type="file"
                                    label="Banner Image"
                                    accept="image/*"
                                    onChange={(e) => setBannerImage(e.target.files[0])}
                                />
                            </CCol>

                            {/* ✅ Our Culture Section (Add/Remove) */}
                            <h5 className="fw-bold mt-3">Our Culture</h5>
                            {ourCultureItems.map((item, index) => (
                                <div key={index} className="border rounded p-3 mb-3">
                                    <div className="row g-3">
                                        <CCol md={4}>
                                            <CFormInput
                                                type="text"
                                                label="Sub Heading"
                                                value={item.sub_heading}
                                                onChange={(e) => handleCultureChange(index, 'sub_heading', e.target.value)}
                                            />
                                        </CCol>
                                        <CCol md={4}>
                                            <CFormInput
                                                type="file"
                                                label="Image"
                                                accept="image/*"
                                                onChange={(e) => handleCultureChange(index, 'image', e.target.files[0])}
                                            />
                                        </CCol>
                                        <CCol md={12}>
                                            <CFormTextarea
                                                label="Description"
                                                rows="3"
                                                value={item.description}
                                                onChange={(e) => handleCultureChange(index, 'description', e.target.value)}
                                            />
                                        </CCol>
                                    </div>
                                    {ourCultureItems.length > 1 && (
                                        <div className="mt-2 text-end">
                                            <CButton color="danger" onClick={() => removeCulture(index)}>
                                                <CIcon icon={cilMinus} /> Remove
                                            </CButton>
                                        </div>
                                    )}
                                </div>
                            ))}
                            <CButton color="success" onClick={addCulture} type="button">
                                <CIcon icon={cilPlus} /> Add Our Culture
                            </CButton>

                            {/* ✅ Community Initiatives (kept dynamic) */}
                            <h5 className="fw-bold mt-4">Community Initiatives</h5>
                            {communityItems.map((item, index) => (
                                <div key={index} className="border rounded p-3 mb-3">
                                    <div className="row g-3">
                                        <CCol md={4}>
                                            <CFormInput
                                                type="text"
                                                label="Community Sub Heading"
                                                value={item.sub_heading}
                                                onChange={(e) => handleCommunityChange(index, 'sub_heading', e.target.value)}
                                            />
                                        </CCol>
                                        <CCol md={4}>
                                            <CFormInput
                                                type="text"
                                                label="Community Heading"
                                                value={item.heading}
                                                onChange={(e) => handleCommunityChange(index, 'heading', e.target.value)}
                                            />
                                        </CCol>
                                        <CCol md={4}>
                                            <CFormInput
                                                type="file"
                                                label="Community Image"
                                                accept="image/*"
                                                onChange={(e) => handleCommunityChange(index, 'image', e.target.files[0])}
                                            />
                                        </CCol>
                                        <CCol md={12}>
                                            <CFormTextarea
                                                label="Community Description"
                                                rows="3"
                                                value={item.description}
                                                onChange={(e) => handleCommunityChange(index, 'description', e.target.value)}
                                            />
                                        </CCol>
                                    </div>
                                    {communityItems.length > 1 && (
                                        <div className="mt-2 text-end">
                                            <CButton color="danger" onClick={() => removeCommunity(index)}>
                                                <CIcon icon={cilMinus} /> Remove
                                            </CButton>
                                        </div>
                                    )}
                                </div>
                            ))}
                            <CButton color="success" onClick={addCommunity} type="button">
                                <CIcon icon={cilPlus} /> Add Community Initiative
                            </CButton>


                            <h5 className="fw-bold mt-4">Employee Initiatives</h5>
                            <CCol md={4}>
                                <CFormInput
                                    type="text"
                                    label="Employee Sub Heading"
                                    value={employeeSubHeading}
                                    onChange={(e) => setEmployeeSubHeading(e.target.value)}
                                />
                            </CCol>
                            <CCol md={4}>
                                <CFormInput
                                    type="text"
                                    label="Employee Heading"
                                    value={employeeHeading}
                                    onChange={(e) => setEmployeeHeading(e.target.value)}
                                />
                            </CCol>
                            <CCol md={4}>
                                <CFormInput
                                    type="file"
                                    label="Employee Image"
                                    accept="image/*"
                                    onChange={(e) => setEmployeeImage(e.target.files[0])}
                                />
                            </CCol>
                            <CCol md={12}>
                                <CFormTextarea
                                    label="Employee Description"
                                    rows="3"
                                    value={employeeDescription}
                                    onChange={(e) => setEmployeeDescription(e.target.value)}
                                />
                            </CCol>

                            {/* Common Fields */}
                            <CCol md={6}>
                                <CFormSelect label="Type" value={type} onChange={(e) => setType(e.target.value)}>
                                    <option value="single">Single</option>
                                    <option value="carousel">Carousel</option>
                                </CFormSelect>
                            </CCol>
                            <CCol md={6}>
                                <CFormSelect
                                    label="Status"
                                    value={status}
                                    onChange={(e) => setStatus(Number(e.target.value))}
                                >
                                    <option value={1}>Active</option>
                                    <option value={0}>Inactive</option>
                                </CFormSelect>
                            </CCol>

                            {/* Submit */}
                            <CCol xs={12}>
                                <CButton color="primary" type="submit">
                                    Submit
                                </CButton>
                            </CCol>
                        </CForm>
                    </div>
                </div>
                <AppFooter />
            </div>
        </div>
    );
}
