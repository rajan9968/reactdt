import React, { useState, useEffect } from 'react';
import {
    CButton,
    CCol,
    CForm,
    CFormInput,
    CFormSelect,
    CBreadcrumb,
    CBreadcrumbItem,
    CFormTextarea
} from '@coreui/react';
import { cilArrowLeft, cilPlus, cilTrash } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { AppSidebar, AppFooter, AppHeader } from '../../../../../components/index';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import api from '../../../../../../../api/axiosInstance';
import { toast } from 'react-toastify';
import '../../../../../../admin2/scss/style.scss';
import '../../../../../../admin2/scss/examples.scss';
import '../../../../../../admin2/scss/custom.css';

export default function EditAboutBanner() {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = location.state || {};

    const [subHeading, setSubHeading] = useState('');
    const [image, setImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [status, setStatus] = useState(1);
    const [page_type, setPageType] = useState('');
    const [existingImage, setExistingImage] = useState('');
    const [keyHighlights, setKeyHighlights] = useState([]);
    const [ourApproach, setOurApproach] = useState([]);
    const [overviewText, setOverviewText] = useState('');
    const [overviewImage, setOverviewImage] = useState(null);
    const [previewOverviewImage, setPreviewOverviewImage] = useState(null);
    const [existingOverviewImage, setExistingOverviewImage] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/pre-development/get-pre-development-banner/${id}`);
                if (response.data.success && response.data.banner) {
                    const banner = response.data.banner;

                    const safeParse = (val) => {
                        if (!val) return [];
                        if (typeof val === 'object') return val;
                        try {
                            return JSON.parse(val);
                        } catch {
                            return [];
                        }
                    };

                    setSubHeading(banner.sub_heading);
                    setStatus(banner.status);
                    setExistingImage(banner.banner_image);
                    setKeyHighlights(safeParse(banner.key_highlights));
                    setOurApproach(safeParse(banner.our_approach));
                    setOverviewText(banner.overview_text);
                    setExistingOverviewImage(banner.overview_image);
                    setPageType(banner.page_type);

                } else {
                    toast.error('Failed to load banner details');
                }
            } catch (error) {
                console.error('Error fetching banner:', error);
                toast.error('Error loading banner details');
            }
        };
        fetchData();
    }, [id]);

    // ✅ Handle main image upload
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const handleOverviewImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setOverviewImage(file);
            setPreviewOverviewImage(URL.createObjectURL(file));
        }
    };


    // ✅ Handle Key Highlights change
    const handleKeyHighlightChange = (index, field, value) => {
        const updated = [...keyHighlights];
        updated[index][field] = value;
        setKeyHighlights(updated);
    };

    const addKeyHighlight = () => {
        setKeyHighlights([...keyHighlights, { text: '', number: '' }]);
    };

    const removeKeyHighlight = (index) => {
        setKeyHighlights(keyHighlights.filter((_, i) => i !== index));
    };

    // ✅ Handle Our Approach change
    const handleApproachChange = (index, field, value) => {
        const updated = [...ourApproach];
        updated[index][field] = value;
        setOurApproach(updated);
    };

    const handleApproachImageChange = (index, e) => {
        const file = e.target.files[0];
        if (file) {
            const updated = [...ourApproach];
            updated[index].imageFile = file;
            updated[index].preview = URL.createObjectURL(file);
            setOurApproach(updated);
        }
    };

    const addApproach = () => {
        setOurApproach([...ourApproach, { image: '', heading: '', text: '' }]);
    };

    const removeApproach = (index) => {
        setOurApproach(ourApproach.filter((_, i) => i !== index));
    };

    // ✅ Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('sub_heading', subHeading);
        formData.append('status', status);
        formData.append('page_type', page_type);
        if (image) {
            formData.append('banner_image', image);
        }

        formData.append('key_highlights', JSON.stringify(keyHighlights));

        // Handle our_approach including new images
        const formattedApproach = ourApproach.map((item) => ({
            heading: item.heading,
            text: item.text,
            image: item.imageFile ? item.imageFile.name : item.image,
        }));

        formData.append('our_approach', JSON.stringify(formattedApproach));

        // Append actual image files
        ourApproach.forEach((item, index) => {
            if (item.imageFile) {
                formData.append(`approach_image_${index}`, item.imageFile);
            }
        });

        try {
            const response = await api.put(
                `/pre-development/update-pre-development-banner/${id}`,
                formData,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            );

            if (response.data.success) {
                toast.success('About banner updated successfully!');
                setTimeout(() => navigate('/admin/pre-development-epc'), 1000);
            } else {
                toast.error(response.data.message || 'Failed to update banner');
            }
        } catch (error) {
            console.error('Error updating banner:', error);
            toast.error('An error occurred while updating');
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
                                    </Link>
                                    / Edit Pre Development EPC
                                </CBreadcrumbItem>
                            </CBreadcrumb>
                        </div>
                    </div>

                    {/* Back Button */}
                    <div className="row mb-3">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6 d-flex justify-content-end">
                            <Link to="/admin/about-banner" className="text-decoration-none">
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
                            <CCol md={6}>
                                <CFormInput
                                    type="text"
                                    label="Sub Heading"
                                    value={subHeading}
                                    onChange={(e) => setSubHeading(e.target.value)}
                                    required
                                />
                            </CCol>

                            <CCol md={6}>
                                <CFormInput type="file" label="Banner Image" onChange={handleImageChange} />
                                {existingImage && !previewImage && (
                                    <img
                                        src={`http://localhost:50000/uploads/about-banners/${existingImage}`}
                                        alt="Current Banner"
                                        width="150"
                                        className="mt-2 rounded shadow-sm"
                                    />
                                )}
                                {previewImage && (
                                    <img
                                        src={previewImage}
                                        alt="Preview"
                                        width="150"
                                        className="mt-2 rounded shadow-sm"
                                    />
                                )}
                            </CCol>

                            <hr className="my-4" />
                            <h5 className="fw-bold mb-3">Overview</h5>
                            {/* Overview Text */}
                            <CCol md={12}>
                                <CFormTextarea
                                    label="Overview Text"
                                    rows={3}
                                    value={overviewText}
                                    onChange={(e) => setOverviewText(e.target.value)}
                                />
                            </CCol>

                            {/* Overview Image */}
                            <CCol md={6}>
                                <CFormInput
                                    type="file"
                                    label="Overview Image"
                                    onChange={handleOverviewImageChange}
                                    accept="image/*"
                                />

                                {/* Existing Image */}
                                {existingOverviewImage && !previewOverviewImage && (
                                    <img
                                        src={`http://localhost:50000/uploads/about-banners/${existingOverviewImage}`}
                                        alt="Current Overview"
                                        width="150"
                                        className="mt-2 rounded shadow-sm"
                                    />
                                )}

                                {/* Preview New Image */}
                                {previewOverviewImage && (
                                    <img
                                        src={previewOverviewImage}
                                        alt="Preview Overview"
                                        width="150"
                                        className="mt-2 rounded shadow-sm"
                                    />
                                )}
                            </CCol>

                            {/* --- Key Highlights --- */}
                            <hr className="my-4" />
                            <h5 className="fw-bold mb-3">Key Highlights</h5>
                            {keyHighlights.map((item, index) => (
                                <div key={index} className="row mb-2">
                                    <CCol md={5}>
                                        <CFormInput
                                            label="Number"
                                            value={item.number}
                                            onChange={(e) => handleKeyHighlightChange(index, 'number', e.target.value)}
                                        />
                                    </CCol>
                                    <CCol md={5}>
                                        <CFormInput
                                            label="Text"
                                            value={item.text}
                                            onChange={(e) => handleKeyHighlightChange(index, 'text', e.target.value)}
                                        />
                                    </CCol>
                                    <CCol md={2} className="d-flex align-items-end">
                                        <CButton color="danger" onClick={() => removeKeyHighlight(index)}>
                                            <CIcon icon={cilTrash} />
                                        </CButton>
                                    </CCol>
                                </div>
                            ))}
                            <CButton color="secondary" onClick={addKeyHighlight}>
                                <CIcon icon={cilPlus} /> Add Highlight
                            </CButton>

                            {/* --- Our Approach --- */}
                            <hr className="my-4" />
                            <h5 className="fw-bold mb-3">Our Approach</h5>
                            {ourApproach.map((item, index) => (
                                <div key={index} className="row mb-2">
                                    <CCol md={3}>
                                        <CFormInput type="file" label="Image" onChange={(e) => handleApproachImageChange(index, e)} />
                                        {(item.preview || item.image) && (
                                            <img
                                                src={
                                                    item.preview
                                                        ? item.preview
                                                        : `http://localhost:50000/uploads/about-banners/${item.image}`
                                                }
                                                alt="Preview"
                                                width="100"
                                                className="mt-2 rounded"
                                            />
                                        )}
                                    </CCol>
                                    <CCol md={3}>
                                        <CFormInput
                                            label="Heading"
                                            value={item.heading}
                                            onChange={(e) => handleApproachChange(index, 'heading', e.target.value)}
                                        />
                                    </CCol>
                                    <CCol md={5}>
                                        <CFormInput
                                            label="Text"
                                            value={item.text}
                                            onChange={(e) => handleApproachChange(index, 'text', e.target.value)}
                                        />
                                    </CCol>
                                    <CCol md={1} className="d-flex align-items-end">
                                        <CButton color="danger" onClick={() => removeApproach(index)}>
                                            <CIcon icon={cilTrash} />
                                        </CButton>
                                    </CCol>
                                </div>
                            ))}
                            <CButton color="secondary" onClick={addApproach}>
                                <CIcon icon={cilPlus} /> Add Approach
                            </CButton>
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
                            <CCol md={6}>
                                <CFormSelect
                                    label="Type"
                                    value={page_type}
                                    onChange={(e) => setPageType(e.target.value)} // ✅ Fixed
                                >
                                    <option value="Pre-Development EPC">Pre-Development EPC</option>
                                    <option value="Turnkey EPC Projects">Turnkey EPC Projects</option>
                                    <option value="Grid Infrastructure">Grid Infrastructure</option>
                                    <option value="Independent Power Producer">Independent Power Producer</option>
                                </CFormSelect>
                            </CCol>

                            <CCol xs={12} className="mt-4">
                                <CButton color="primary" type="submit">
                                    Update
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
